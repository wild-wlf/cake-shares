import { useEffect, useState } from 'react';
import { Fetch } from '../helpers/fetchWrapper';
import { useCancellablePromise } from '../helpers/promiseHandler';

const STATUS = {
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

const cardService = {
  _url: `${process.env.REACT_APP_CARD_API_URL}/card/v1`,

  GetCard(searchQuery, refetch) {
    const [cards, setCards] = useState({
      cards: [],
      totalItems: 0,
    });
    const { cancellablePromise } = useCancellablePromise();
    const [status, setStatus] = useState(STATUS.LOADING);
    useEffect(() => {
      setStatus(STATUS.LOADING);
      cancellablePromise(this.getCard(searchQuery))
        .then(res => {
          setCards(() => res);
          setStatus(STATUS.SUCCESS);
        })
        .catch(() => setStatus(STATUS.ERROR));
    }, [
      searchQuery?.searchText,
      searchQuery?.page,
      searchQuery?.pageSize,
      searchQuery?.sort,
      searchQuery?.startDate,
      searchQuery?.endDate,
      searchQuery?.searchText,
      refetch,
    ]);
    return {
      cards_loading: status === STATUS.LOADING,
      cards_error: status === STATUS.ERROR ? status : '',
      cards_data: cards,
    };
  },
  async getCard({ page = 1, pageSize = 10, searchText, sort = '' }) {
    let res = await Fetch.get(
      `${this._url}/admin/cards??page=${page}&perPage=${pageSize}&searchText=${searchText}&sort=${sort}`,
    );
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return {
        cards: res.items,
        totalItems: res.totalItems,
      };
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async health() {
    const res = await Fetch.get(`${this._url}/card/health`);
    if (res.status >= 200 && res.status < 300) {
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
};

export default cardService;
