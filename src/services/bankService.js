import { useEffect, useState } from 'react';
import { useCancellablePromise } from 'helpers/promiseHandler';
import { Fetch } from '../helpers/fetchWrapper';

const STATUS = {
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

const bankService = {
  _url: process.env.REACT_APP_BANK_API_URL,

  GetBusiness(searchQuery, refetch) {
    const [business, setBusiness] = useState({
      business: [],
      totalItems: 0,
    });
    const { cancellablePromise } = useCancellablePromise();
    const [status, setStatus] = useState(STATUS.LOADING);
    useEffect(() => {
      setStatus(STATUS.LOADING);
      cancellablePromise(this.getBusiness(searchQuery))
        .then(res => {
          setBusiness(() => res);
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
      business_loading: status === STATUS.LOADING,
      business_error: status === STATUS.ERROR ? status : '',
      business_data: business,
    };
  },
  async health() {
    const res = await Fetch.get(`${this._url}/bank/health`);
    if (res.status >= 200 && res.status < 300) {
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async getBusiness({ page = 1, pageSize = 10, searchText, sort = '', getAll = false }) {
    let res = await Fetch.get(
      `${this._url}/get-all-business-profiles?page=${page}&perPage=${pageSize}&searchText=${searchText}&sort=${sort}&getAll=${getAll}`,
    );
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return {
        business: res.items,
        totalItems: res.totalItems,
      };
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
};
export default bankService;
