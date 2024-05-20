import { useEffect, useState } from 'react';
import { Fetch } from '../helpers/fetchWrapper';
import { useCancellablePromise } from '../helpers/promiseHandler';

const STATUS = {
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};
const userService = {
  _url: `${process.env.REACT_APP_USER_API_URL}/user/v1`,

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
    const res = await Fetch.get(`${this._url}/user/health`);
    if (res.status >= 200 && res.status < 300) {
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },

  async getUsers({ page = 1, pageSize = 10, searchText, startDate, endDate, getAll = false }) {
    let res = await Fetch.get(
      `${this._url}/users?itemsPerPage=${pageSize}&page=${page}&searchText=${searchText}&startDate=${startDate}&endDate=${endDate}&getAll=${getAll}`,
    );
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return {
        users: res.items,
        totalItems: res.totalItems,
      };
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },

  async updateStatus(id) {
    let res = await Fetch.put(`${this._url}/status/${id}`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
};
export default userService;
