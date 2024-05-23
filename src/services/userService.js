import { useEffect, useState } from "react";
import { Fetch } from "../helpers/fetchWrapper";
import { useCancellablePromise } from "../helpers/promiseHandler";

const STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error",
};
const userService = {
  _url: `${process.env.NEXT_PUBLIC_USER_URL}/v1/user`,
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
        .then((res) => {
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
      users_error: status === STATUS.ERROR ? status : "",
      users_data: users,
    };
  },

  async health() {
    const res = await Fetch.get(`${this._url}/health`);
    if (res.status >= 200 && res.status < 300) {
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? "Something went wrong");
  },

  // async getUsers({
  //   page = 1,
  //   pageSize = 10,
  //   searchText,
  //   filterRoles = "",
  //   startDate,
  //   endDate,
  //   getAll = false,
  // }) {
  //   let res = await Fetch.get(
  //     `${this._url}/get-all-admins?itemsPerPage=${pageSize}&page=${page}&searchText=${searchText}&filterRoles=${filterRoles}&startDate=${startDate}&endDate=${endDate}&getAll=${getAll}`
  //   );
  //   if (res.status >= 200 && res.status < 300) {
  //     res = await res.json();
  //     return {
  //       admins: res.items,
  //       totalItems: res.totalItems,
  //     };
  //   }
  //   const { message } = await res.json();
  //   throw new Error(message ?? "Something went wrong");
  // },

  async login(payload) {
    let res = await Fetch.post(`${this._url}/login`, payload);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? "Something went wrong");
  },

  // register
  async createUser(payload) {
    let res = await Fetch.upload(`${this._url}/registeration`, "POST", payload);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? "Something went wrong");
  },

  async logout() {
    let res = await Fetch.delete(`${this._url}/logout`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? "Something went wrong");
  },

  async getCurrentAdmin() {
    let res = await Fetch.get(`${this._url}/me`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? "Something went wrong");
  },
};
export default userService;