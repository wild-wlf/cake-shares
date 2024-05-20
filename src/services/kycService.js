import { useEffect, useState } from 'react';
import { useCancellablePromise } from '../helpers/promiseHandler';
import { Fetch } from '../helpers/fetchWrapper';

const STATUS = {
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};
const kycService = {
  _url: `${process.env.REACT_APP_KYC_API_URL}/auth/v1/admin`,

  GetKYC(searchQuery, refetch) {
    const [kyc, setKyc] = useState({
      kyc: [],
      totalItems: 0,
    });
    const { cancellablePromise } = useCancellablePromise();
    const [status, setStatus] = useState(STATUS.LOADING);
    useEffect(() => {
      setStatus(STATUS.LOADING);
      cancellablePromise(this.getKyc(searchQuery))
        .then(res => {
          setKyc(() => res);
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
      kyc_loading: status === STATUS.LOADING,
      kyc_error: status === STATUS.ERROR ? status : '',
      kyc_data: kyc,
    };
  },

  async health() {
    const res = await Fetch.get(`${this._url}/kyc/health`);
    if (res.status >= 200 && res.status < 300) {
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async getKyc({ page = 1, pageSize = 10, searchText, sort = '', getAll = false }) {
    let res = await Fetch.get(
      `${this._url}/get-all-kyc?page=${page}&perPage=${pageSize}&searchText=${searchText}&sort=${sort}&getAll=${getAll}`,
    );
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return {
        kyc: res.items,
        totalItems: res.totalItems,
      };
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
};
export default kycService;
