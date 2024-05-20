import { useEffect, useState } from 'react';
import { useCancellablePromise } from '../helpers/promiseHandler';
import { Fetch } from '../helpers/fetchWrapper';

const STATUS = {
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

const transactionService = {
  _url: `${process.env.REACT_APP_TRANSACTIONS_API_URL}/transaction/v1`,
  // _url: 'http://localhost:4005/transaction/v1',

  GetTransactions(searchQuery, fetch) {
    const [transactions, setTransactions] = useState({
      totalItems: 0,
      transactions: [],
    });
    const { cancellablePromise } = useCancellablePromise();
    const [status, setStatus] = useState(STATUS.LOADING);
    useEffect(() => {
      setStatus(STATUS.LOADING);
      cancellablePromise(this.getTransactions(searchQuery))
        .then(res => {
          setTransactions(() => res);
          setStatus(STATUS.SUCCESS);
        })
        .catch(() => setStatus(STATUS.ERROR));
    }, [searchQuery?.searchText, searchQuery?.parentOnly ? JSON.stringify(searchQuery) : searchQuery, fetch]);
    return {
      transactions_loading: status === STATUS.LOADING,
      transactions_error: status === STATUS.ERROR ? status : '',
      transactions_data: transactions,
    };
  },

  GetSpecificTransactions(searchQuery, fetch) {
    const [transactions, setTransactions] = useState({
      totalItems: 0,
      transactions: [],
    });
    const { cancellablePromise } = useCancellablePromise();
    const [status, setStatus] = useState(STATUS.LOADING);
    useEffect(() => {
      setStatus(STATUS.LOADING);
      cancellablePromise(this.getSpecificTransactions(searchQuery))
        .then(res => {
          setTransactions(() => res);
          setStatus(STATUS.SUCCESS);
        })
        .catch(() => setStatus(STATUS.ERROR));
    }, [searchQuery?.parentOnly ? JSON.stringify(searchQuery) : searchQuery, fetch]);
    return {
      transactions_loading: status === STATUS.LOADING,
      transactions_error: status === STATUS.ERROR ? status : '',
      transactions_data: transactions,
    };
  },

  async getTransactions({ page = 1, pageSize = 10, searchText = '', sort = '', userId = '' }) {
    let res = await Fetch.get(
      `${this._url}/admin/get-all-transactions?page=${page}&perPage=${pageSize}&searchText=${searchText}&sort=${sort}&userId=${userId}`,
    );
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return {
        transactions: res.items,
        totalItems: res.totalItems,
      };
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },

  async health() {
    const res = await Fetch.get(`${this._url}/transaction/health`);
    if (res.status >= 200 && res.status < 300) {
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
};
export default transactionService;
