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

  async login({ email = "", password = "" }) {
    let res = await Fetch.post(`${this._url}/login`, { email, password });
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? "Something went wrong");
  },
  async createUser(payload) {
    let res = await Fetch.upload(`${this._url}/registeration`, "POST", payload);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? "Something went wrong");
  },
  // async deleteAdmin(id) {
  //   let res = await Fetch.delete(`${this._url}/delete-admin/${id}`);
  //   if (res.status >= 200 && res.status < 300) {
  //     res = await res.json();
  //     return res;
  //   }
  //   const { message } = await res.json();
  //   throw new Error(message ?? "Something went wrong");
  // },

  // async addAdmin(values) {
  //   let res = await Fetch.post(`${this._url}/add-admin`, values);
  //   if (res.status >= 200 && res.status < 300) {
  //     res = await res.json();
  //     return res;
  //   }
  //   const { message } = await res.json();
  //   throw new Error(message ?? "Something went wrong");
  // },

  async updateUser(id, values) {
    let res = await Fetch.patch(`${this._url}/update-user/${id}`, values);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? "Something went wrong");
  },
  // async removeAdminJwt() {
  //   let res = await Fetch.delete(`${this._url}/logout`);
  //   if (res.status >= 200 && res.status < 300) {
  //     res = await res.json();
  //     return res;
  //   }
  //   const { message } = await res.json();
  //   throw new Error(message ?? "Something went wrong");
  // },

  // async foreLogoutUser(id) {
  //   let res = await Fetch.post(`${this._url}/force-logout-admin/${id}`);
  //   if (res.status >= 200 && res.status < 300) {
  //     res = await res.json();
  //     return res;
  //   }
  //   const { message } = await res.json();
  //   throw new Error(message ?? "Something went wrong");
  // },

  // async getCurrentAdmin() {
  //   let res = await Fetch.get(`${this._url}/perms`);
  //   if (res.status >= 200 && res.status < 300) {
  //     res = await res.json();
  //     return res;
  //   }
  //   const { message } = await res.json();
  //   throw new Error(message ?? "Something went wrong");
  // },

  // async getRoles({
  //   page = 1,
  //   pageSize = 10,
  //   searchText = "",
  //   filterRoles = "",
  //   startDate = "",
  //   endDate = "",
  //   getAll = false,
  // }) {
  //   let res = await Fetch.get(
  //     `${this._url}/role?page=${page}&perPage=${pageSize}&searchText=${searchText}&filterRoles=${filterRoles}&startDate=${startDate}&endDate=${endDate}&getAll=${getAll}`
  //   );
  //   if (res.status >= 200 && res.status < 300) {
  //     res = await res.json();
  //     return {
  //       roles: res.items,
  //       totalItems: res.totalItems,
  //     };
  //   }
  //   const { message } = await res.json();
  //   throw new Error(message ?? "Something went wrong");
  // },

  // async exportRoles({
  //   searchText = "",
  //   filterText = "",
  //   startDate = "",
  //   endDate = "",
  // }) {
  //   let res = await Fetch.get(
  //     `${this._url}/export-role?searchText=${searchText}&filterText=${filterText}&startDate=${startDate}&endDate=${endDate}`
  //   );
  //   if (res.status >= 200 && res.status < 300) {
  //     res = await res.json();
  //     return {
  //       exportRoles: res.items,
  //       totalItems: res.totalItems,
  //     };
  //   }
  //   const { message } = await res.json();
  //   throw new Error(message ?? "Something went wrong");
  // },

  async getPermissions({
    page = 1,
    pageSize = 10,
    searchText = "",
    startDate = "",
    endDate = "",
    getAll = false,
    parentOnly = false,
    filterPermission = "",
  }) {
    let res = await Fetch.get(
      `${this._url}/get-all-permission?page=${page}&perPage=${pageSize}&searchText=${searchText}&filterText=${filterPermission}&startDate=${startDate}&endDate=${endDate}&getAll=${getAll}&parentOnly=${parentOnly}`
    );
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return {
        permissions: res.items,
        totalItems: res.totalItems,
      };
    }
    const { message } = await res.json();
    throw new Error(message ?? "Something went wrong");
  },

  async exportPermissions({
    searchText = "",
    startDate = "",
    endDate = "",
    filterPermission = "",
  }) {
    let res = await Fetch.get(
      `${this._url}/export-permission?searchText=${searchText}&filterText=${filterPermission}&startDate=${startDate}&endDate=${endDate}`
    );
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return {
        exportPermissions: res.items,
        totalItems: res.totalItems,
      };
    }
    const { message } = await res.json();
    throw new Error(message ?? "Something went wrong");
  },

  // **** Dynamic calling****
  async getPermissionsOptions({ parentOnly = false }) {
    let res = await Fetch.get(
      `${this._url}/get-all-permission?parentOnly=${parentOnly}`
    );
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return {
        permissionStatus: res.items.map(({ can }) => ({
          label: can.split(".")[0],
          value: can.split(".")[0],
        })),
      };
    }
    const { message } = await res.json();
    throw new Error(message ?? "Something went wrong");
  },

  async updateRole(id, payload) {
    let res = await Fetch.put(`${this._url}/role/${id}`, payload);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? "Something went wrong");
  },

  async deleteRole(id) {
    let res = await Fetch.delete(`${this._url}/delete-role/${id}`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? "Something went wrong");
  },

  async restoreRole(id) {
    let res = await Fetch.post(`${this._url}/restore-role`, { id });
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? "Something went wrong");
  },

  async createPermission(payload) {
    let res = await Fetch.post(`${this._url}/permission`, payload);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? "Something went wrong");
  },

  async updatePermission(id, payload) {
    let res = await Fetch.put(`${this._url}/permission/${id}`, payload);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? "Something went wrong");
  },
  async deletePermission(id) {
    let res = await Fetch.delete(`${this._url}/permission/${id}`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? "Something went wrong");
  },
  async loadPermissions() {
    let res = await Fetch.post(`${this._url}/load-permissions`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? "Something went wrong");
  },

  async rolesFiltersOptions({ getAll = true }) {
    let res = await Fetch.get(`${this._url}/role?getAll=${getAll}`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return {
        options: res.items.map(({ type }) => ({ label: type, value: type })),
      };
    }
    const { message } = await res.json();
    throw new Error(message ?? "Something went wrong");
  },

  async suspendAdmin(id) {
    let res = await Fetch.put(`${this._url}/suspend-admin/${id}`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? "Something went wrong");
  },
};
export default userService;
