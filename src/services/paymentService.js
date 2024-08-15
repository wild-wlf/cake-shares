import { useCancellablePromise } from '@/helpers/promiseHandler';
import { Fetch } from '../helpers/fetchWrapper';
import { useEffect, useState } from 'react';

const STATUS = {
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

const paymentService = {
  _url: `${process.env.NEXT_PUBLIC_PAYMENT_URL}`,

  GetAllCards() {
    const [cards, setCards] = useState([]);
    const { cancellablePromise } = useCancellablePromise();
    const [status, setStatus] = useState(STATUS.LOADING);

    useEffect(() => {
      setStatus(STATUS.LOADING);
      cancellablePromise(this.listCustomerCards())
        .then(res => {
          setCards(() => res);
          setStatus(STATUS.SUCCESS);
        })
        .catch(() => setStatus(STATUS.SUCCESS));
    }, []);
    return {
      cards_loading: status === STATUS.LOADING,
      cards_error: status === STATUS.ERROR,
      cards_data: cards,
    };
  },

  async getStripeConfig() {
    let res = await Fetch.get(`${this._url}/stripe-config`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },

  async createPaymentIntent(payload) {
    let res = await Fetch.post(`${this._url}/create-payment-intent`, payload);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },

  async listCustomerCards(payload) {
    let res = await Fetch.get(`${this._url}/list-cards`, payload);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();

      return res.data;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },

  async requestPayout(payload) {
    let res = await Fetch.post(`${this._url}/request-payout`, payload);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();

      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },

  async downloadStatement(payload) {
    let res = await Fetch.post(`${this._url}/download-statement`, payload);

    const blob = await res.blob();
    const url = window.URL.createObjectURL(new Blob([blob]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'statement.xlsx');
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  },
};

export default paymentService;
