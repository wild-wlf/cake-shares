import { useState, useEffect } from 'react';
import { useCancellablePromise } from 'helpers/promiseHandler';
import { Fetch } from '../helpers/fetchWrapper';

const STATUS = {
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

const dashboardService = {
  _url: `${process.env.REACT_APP_ADMIN_API_URL}/api`,

  GetBusinessAnalytics() {
    const [businessAnalytics, setBusinessAnalytics] = useState({
      businessAnalytics: [],
    });
    const { cancellablePromise } = useCancellablePromise();
    const [businessAnalyticsStatus, setBusinessAnalyticsStatus] = useState(STATUS.LOADING);
    useEffect(() => {
      setBusinessAnalyticsStatus(STATUS.LOADING);
      cancellablePromise(this.getBusinessAnalytics())
        .then(res => {
          setBusinessAnalytics(() => res);
          setBusinessAnalyticsStatus(STATUS.SUCCESS);
        })
        .catch(() => setBusinessAnalyticsStatus(STATUS.ERROR));
    }, []);
    return {
      business_analytics_loading: businessAnalyticsStatus === STATUS.LOADING,
      business_analytics_error: businessAnalyticsStatus === STATUS.ERROR,
      business_analytics_data: businessAnalytics,
    };
  },

  GetSalesAnalytics() {
    const [salesAnalytics, setSalesAnalytics] = useState({
      salesAnalytics: [],
    });
    const { cancellablePromise } = useCancellablePromise();
    const [salesAnalyticsStatus, setSalesAnalyticsStatus] = useState(STATUS.LOADING);
    useEffect(() => {
      setSalesAnalyticsStatus(STATUS.LOADING);
      cancellablePromise(this.getSalesAnalytics())
        .then(res => {
          setSalesAnalytics(() => res);
          setSalesAnalyticsStatus(STATUS.SUCCESS);
        })
        .catch(() => setSalesAnalyticsStatus(STATUS.ERROR));
    }, []);
    return {
      sales_analytics_loading: salesAnalyticsStatus === STATUS.LOADING,
      sales_analytics_error: salesAnalyticsStatus === STATUS.ERROR,
      sales_analytics_data: salesAnalytics,
    };
  },

  GetTopSellingBusinesses() {
    const [topSellingBusinesses, setTopSellingBusinesses] = useState({
      topSellingBusinesses: [],
    });
    const { cancellablePromise } = useCancellablePromise();
    const [topSellingBusinessesStatus, setTopSellingBusinessesStatus] = useState(STATUS.LOADING);
    useEffect(() => {
      setTopSellingBusinessesStatus(STATUS.LOADING);
      cancellablePromise(this.getTopSellingBusinesses())
        .then(res => {
          setTopSellingBusinesses(() => res);
          setTopSellingBusinessesStatus(STATUS.SUCCESS);
        })
        .catch(() => setTopSellingBusinessesStatus(STATUS.ERROR));
    }, []);
    return {
      top_selling_businesses_loading: topSellingBusinessesStatus === STATUS.LOADING,
      top_selling_businesses_error: topSellingBusinessesStatus === STATUS.ERROR,
      top_selling_businesses_data: topSellingBusinesses,
    };
  },

  GetBusinessesLocation() {
    const [businessesLocation, setBusinessesLocation] = useState({
      businessesLocation: [],
    });
    const { cancellablePromise } = useCancellablePromise();
    const [businessesLocationStatus, setBusinessesLocationStatus] = useState(STATUS.LOADING);
    useEffect(() => {
      setBusinessesLocationStatus(STATUS.LOADING);
      cancellablePromise(this.getBusinessesLocation())
        .then(res => {
          setBusinessesLocation(() => res);
          setBusinessesLocationStatus(STATUS.SUCCESS);
        })
        .catch(() => setBusinessesLocationStatus(STATUS.ERROR));
    }, []);
    return {
      businesses_location_loading: businessesLocationStatus === STATUS.LOADING,
      businesses_location_error: businessesLocationStatus === STATUS.ERROR,
      businesses_location_data: businessesLocation,
    };
  },

  async getBusinessAnalytics() {
    let res = await Fetch.get(`${this._url}/business/get-business-analytics`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something Went Wrong');
  },

  async getSalesAnalytics() {
    let res = await Fetch.get(`${this._url}/sale/get-sales-analytics`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something Went Wrong');
  },

  async getTopSellingBusinesses() {
    let res = await Fetch.get(`${this._url}/sale/get-top-selling-businesses`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something Went Wrong');
  },

  async getBusinessesLocation() {
    let res = await Fetch.get(`${this._url}/business/get-businesses-location`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something Went Wrong');
  },
};
export default dashboardService;
