import { useEffect, useState } from "react";
import { Fetch } from "../helpers/fetchWrapper";
import { useCancellablePromise } from "../helpers/promiseHandler";

const STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error",
};
const productService = {
  _url: `${process.env.NEXT_PUBLIC_USER_URL}/v1/product`,
  /**
   * Hooks
   */

  GetProducts(searchQuery, refetch) {
    const [products, setProducts] = useState({
      products: [],
      totalItems: 0,
    });
    const { cancellablePromise } = useCancellablePromise();
    const [status, setStatus] = useState(STATUS.LOADING);
    useEffect(() => {
      setStatus(STATUS.LOADING);
      cancellablePromise(this.getProducts(searchQuery))
        .then((res) => {
          setProducts(() => res);
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
      products_loading: status === STATUS.LOADING,
      products_error: status === STATUS.ERROR ? status : "",
      products_data: products,
    };
  },

  GetMyAssets(searchQuery, refetch) {
    const [assets, setAssets] = useState({
      users: [],
      totalItems: 0,
    });
    const { cancellablePromise } = useCancellablePromise();
    const [status, setStatus] = useState(STATUS.LOADING);
    useEffect(() => {
      setStatus(STATUS.LOADING);
      cancellablePromise(this.getAssets(searchQuery))
        .then((res) => {
          setAssets(() => res);
          setStatus(STATUS.SUCCESS);
        })
        .catch(() => setStatus(STATUS.ERROR));
    }, [
      searchQuery?.searchText,
      searchQuery?.page,
      searchQuery?.pageSize,
      refetch,
    ]);
    return {
      assets_loading: status === STATUS.LOADING,
      assets_error: status === STATUS.ERROR ? status : "",
      assets_data: assets,
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

  async getProducts({
    page = 1,
    pageSize = 10,
    searchText,
    startDate,
    endDate,
    getAll = true,
  }) {
    let res = await Fetch.get(
      `${this._url}/products?itemsPerPage=${pageSize}&page=${page}&searchText=${searchText}&startDate=${startDate}&endDate=${endDate}&getAll=${getAll}`
    );
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      console.log(res);
      return {
        products: res.items,
        totalItems: res.totalItems,
      };
    }
    const { message } = await res.json();
    throw new Error(message ?? "Something went wrong");
  },

  async getAssets() {
    let res = await Fetch.get(`${this._url}/get-all-assets`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return {
        assets: res.items,
        totalItems: res.totalItems,
      };
    }
    const { message } = await res.json();
    throw new Error(message ?? "Something went wrong");
  },
};
export default productService;
