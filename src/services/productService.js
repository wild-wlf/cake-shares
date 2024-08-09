import { useEffect, useState } from 'react';
import { Fetch } from '../helpers/fetchWrapper';
import { useCancellablePromise } from '../helpers/promiseHandler';

const STATUS = {
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};
const productService = {
  _url: `${process.env.NEXT_PUBLIC_PRODUCT_URL}`,
  /**
   * Hooks
   */

  GetProducts(searchQuery) {
    const [products, setProducts] = useState({
      recommendedProducts: [],
      popularProducts: [],
      priceRange: null,
    });
    const { cancellablePromise } = useCancellablePromise();
    const [status, setStatus] = useState(STATUS.LOADING);
    useEffect(() => {
      setStatus(STATUS.LOADING);
      cancellablePromise(this.getProducts(searchQuery))
        .then(res => {
          setProducts(() => res);
          setStatus(STATUS.SUCCESS);
        })
        .catch(() => setStatus(STATUS.ERROR));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchQuery]);
    return {
      products_loading: status === STATUS.LOADING,
      products_error: status === STATUS.ERROR ? status : '',
      products_data: products,
    };
  },

  GetMyAssets(searchQuery, refetch) {
    const [assets, setAssets] = useState({
      assets: [],
      totalItems: 0,
    });
    const { cancellablePromise } = useCancellablePromise();
    const [status, setStatus] = useState(STATUS.LOADING);
    useEffect(() => {
      setStatus(STATUS.LOADING);
      cancellablePromise(this.getAssets(searchQuery))
        .then(res => {
          setAssets(() => res);
          setStatus(STATUS.SUCCESS);
        })
        .catch(() => setStatus(STATUS.ERROR));
    }, [searchQuery?.searchText, searchQuery?.page, searchQuery?.pageSize, refetch]);
    return {
      assets_loading: status === STATUS.LOADING,
      assets_error: status === STATUS.ERROR ? status : '',
      assets_data: assets,
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

  async getProducts({ page = 1, pageSize = 10, category }) {
    let res = await Fetch.get(`${this._url}/products?itemsPerPage=${pageSize}&page=${page}&category=${category}`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return {
        popularProducts: res.popularProducts.items,
        popularProductsHasNextPage: res.popularProducts.hasNextPage,
        advertisedProducts: res.advertisedProducts.items,
        advertisedProductsHasNextPage: res.advertisedProducts.hasNextPage,
        priceRange: res.priceRange,
      };
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },

  async getProductDetail(id) {
    let res = await Fetch.get(`${this._url}/get-single-product/${id}`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },

  async getAssets({ page, pageSize, getAll }) {
    let res = await Fetch.get(`${this._url}/get-all-assets?itemsPerPage=${pageSize}&page=${page}&getAll=${getAll}`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return {
        assets: res,
        totalItems: res.totalItems,
      };
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },

  async getUserAssets() {
    let res = await Fetch.get(`${this._url}/get-all-assets`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },

  async getSearchProducts({
    page = 1,
    itemsPerPage = 12,
    searchText = '',
    type,
    investmentType = '',
    kycLevel = '',
    minInvestment = '',
    maxInvestment = '',
    minBackers = '',
    minFundsRaised = '',
    minAnnualCost = '',
    maxDaysLeft = '',
    country = '',
  }) {
    let res = await Fetch.get(
      `${this._url}/search-products?page=${page}&itemsPerPage=${itemsPerPage}&searchText=${searchText}&type=${type}&investmentType=${investmentType}&kycLevel=${kycLevel}&minInvestmentVolume=${minInvestment}&maxInvestmentVolume=${maxInvestment}&valueRaised=${minFundsRaised}&minimumBackers=${minBackers}&country=${country}&daysLeft=${maxDaysLeft}`,
    );
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
};
export default productService;
