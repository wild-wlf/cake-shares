import { useEffect, useState } from 'react';
import { Fetch } from '../helpers/fetchWrapper';
import { useCancellablePromise } from '../helpers/promiseHandler';

const STATUS = {
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};
const userService = {
  _url: `${process.env.NEXT_PUBLIC_USER_URL}`,
  /**
   * Hooks
   */

  GetUsers(searchQuery, refetch) {
    const [users, setUsers] = useState({
      users: [],
      totalItems: 0,
    });
    const { cancellablePromise } = useCancellablePromise();
    const [status, setStatus] = useState(STATUS.LOADING);
    useEffect(() => {
      setStatus(STATUS.LOADING);
      cancellablePromise(this.getUsers(searchQuery))
        .then(res => {
          setUsers(() => res);
          setStatus(STATUS.SUCCESS);
        })
        .catch(() => setStatus(STATUS.ERROR));
    }, [
      searchQuery?.searchText,
      searchQuery?.page,
      searchQuery?.pageSize,
      searchQuery?.filterRoles,
      searchQuery?.startDate,
      searchQuery?.endDate,
      searchQuery?.searchText,
      refetch,
    ]);
    return {
      users_loading: status === STATUS.LOADING,
      users_error: status === STATUS.ERROR ? status : '',
      users_data: users,
    };
  },

  async health() {
    const res = await Fetch.get(`${this._url}/health`);
    if (res.status >= 200 && res.status < 300) {
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },

  async login(payload) {
    let res = await Fetch.post(`${this._url}/login`, payload);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async googleLogin(payload) {
    let res = await Fetch.post(`${this._url}/google-login`, payload);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async update(payload, id) {
    let res = await Fetch.put(`${this._url}/update-chunk-info/${id}`, payload);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async createBank(payload, id) {
    let res = await Fetch.post(`${this._url}/create-bank/${id}`, payload);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async uploadMedia(payload, id) {
    let res = await Fetch.upload(`${this._url}/update-chunk-info/${id}`, 'PUT', payload);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async addInheritance(payload) {
    let res = await Fetch.put(`${this._url}/update-chunk-info`, payload);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async deleteInheritance(id) {
    let res = await Fetch.delete(`${this._url}/delete-inheritance/${id}`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },

  // register
  async createUser(payload) {
    let res = await Fetch.upload(`${this._url}/registration`, 'POST', payload);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  // update password

  async updatePassword(payload, id) {
    let res = await Fetch.patch(`${this._url}/update-password/${id}`, payload);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async logout() {
    let res = await Fetch.delete(`${this._url}/logout`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },

  async getCurrentAdmin() {
    let res = await Fetch.get(`${this._url}/me`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async getUserProfile(id) {
    let res = await Fetch.get(`${this._url}/get-single-user/${id}`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },

  GetAllTransactions(searchQuery, fetch) {
    const [transactions, setTransactions] = useState({
      transactions: [],
      totalItems: 0,
    });
    const { cancellablePromise } = useCancellablePromise();
    const [transactionStatus, setTransactionStatus] = useState(STATUS.LOADING);
    useEffect(() => {
      setTransactionStatus(STATUS.LOADING);
      cancellablePromise(this.getAllTransactions(searchQuery))
        .then(res => {
          setTransactions(() => res);
          setTransactionStatus(STATUS.SUCCESS);
        })
        .catch(() => setTransactionStatus(STATUS.ERROR));
    }, [searchQuery, fetch]);
    return {
      transactions_loading: transactionStatus === STATUS.LOADING,
      transactions_error: transactionStatus === STATUS.ERROR,
      transactions_data: transactions,
    };
  },

  async getAllTransactions({
    page = 1,
    itemsPerPage = 10,
    status = '',
    searchText = '',
    type = '',
    startDate = '',
    endDate = '',
    getAll = false,
  }) {
    let res = await Fetch.get(
      `${this._url}/get-all-transactions?page=${page}&itemsPerPage=${itemsPerPage}&searchText=${searchText}&type=${type}&startDate=${startDate}&endDate=${endDate}&getAll=${getAll}`,
    );
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return {
        transactions: res.items,
        totalItems: res.totalItems,
      };
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something Went Wrong');
  },

  GetWalletDetails() {
    const [wallet, setWallet] = useState();
    const { cancellablePromise } = useCancellablePromise();
    const [status, setStatus] = useState(STATUS.LOADING);
    useEffect(() => {
      setStatus(STATUS.LOADING);
      cancellablePromise(this.getWalletDetails())
        .then(res => {
          setWallet(() => res);
          setStatus(STATUS.SUCCESS);
        })
        .catch(() => setStatus(STATUS.ERROR));
    }, []);
    return {
      wallet_loading: status === STATUS.LOADING,
      wallet_error: status === STATUS.ERROR ? status : '',
      wallet_Details: wallet,
    };
  },

  async getWalletDetails() {
    let res = await Fetch.get(`${this._url}/get-wallet-details`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return {
        wallet: res,
      };
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },

  async updateBankInfo(id, payload) {
    let res = await Fetch.put(`${this._url}/update-bank-info/${id}`, payload);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return {
        wallet: res,
      };
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
};
export default userService;
