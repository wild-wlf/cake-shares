import { useEffect, useState } from 'react';
import { Fetch } from '../helpers/fetchWrapper';
import { useCancellablePromise } from '../helpers/promiseHandler';

const STATUS = {
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

const orderService = {
  _url: `${process.env.REACT_APP_CARD_API_URL}/card/v1`,

  GetOrder(searchQuery, refetch) {
    const [orders, setOrders] = useState({
      orders: [],
      totalItems: 0,
    });
    const { cancellablePromise } = useCancellablePromise();
    const [status, setStatus] = useState(STATUS.LOADING);
    useEffect(() => {
      setStatus(STATUS.LOADING);
      cancellablePromise(this.getOrder(searchQuery))
        .then(res => {
          setOrders(() => res);
          setStatus(STATUS.SUCCESS);
        })
        .catch(() => setStatus(STATUS.ERROR));
    }, [
      searchQuery?.searchText,
      searchQuery?.page,
      searchQuery?.pageSize,
      searchQuery?.sort,
      searchQuery?.searchText,
      refetch,
    ]);
    return {
      orders_loading: status === STATUS.LOADING,
      orders_error: status === STATUS.ERROR ? status : '',
      orders_data: orders,
    };
  },
  async getOrder({ page = 1, pageSize = 10, searchText, sort = '' }) {
    let res = await Fetch.get(
      `${this._url}/admin/orders??page=${page}&perPage=${pageSize}&searchText=${searchText}&sort=${sort}`,
    );
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return {
        orders: res.items,
        totalItems: res.totalItems,
      };
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async health() {
    const res = await Fetch.get(`${this._url}/orders/health`);
    if (res.status >= 200 && res.status < 300) {
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
};

export default orderService;
