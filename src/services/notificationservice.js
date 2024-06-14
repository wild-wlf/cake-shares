import { useState, useEffect } from 'react';
import { useCancellablePromise } from '../helpers/promiseHandler';
import { Fetch } from '../helpers/fetchWrapper';

const STATUS = {
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

const notificationService = {
  _url: `${process.env.NEXT_PUBLIC_NOTIFICATION_URL}`,

  GetAllNotifications(searchQuery, fetch) {
    const [notifications, setNotifications] = useState([]);
    const { cancellablePromise } = useCancellablePromise();
    const [notificationStatus, setNotificationStatus] = useState(STATUS.LOADING);
    useEffect(() => {
      setNotificationStatus(STATUS.LOADING);
      cancellablePromise(this.getAllNotifications(searchQuery))
        .then(res => {
          setNotifications(() => res.data.items);
          setNotificationStatus(STATUS.SUCCESS);
        })
        .catch(() => setNotificationStatus(STATUS.ERROR));
    }, [searchQuery, fetch]);
    return {
      notification_loading: notificationStatus === STATUS.LOADING,
      notification_error: notificationStatus === STATUS.ERROR,
      notification_data: notifications,
    };
  },

  GetAllConversationMessages(searchQuery, fetch) {
    const [messages, setMessages] = useState({
      messages: [],
      totalItems: 0,
    });
    const { cancellablePromise } = useCancellablePromise();
    const [notificationStatus, setNotificationStatus] = useState(STATUS.LOADING);
    useEffect(() => {
      setNotificationStatus(STATUS.LOADING);
      cancellablePromise(this.getAllConversationMessages(searchQuery))
        .then(res => {
          setMessages({
            messages: res.items,
            totalItems: res.totalItems,
          });
          setNotificationStatus(STATUS.SUCCESS);
        })
        .catch(() => setNotificationStatus(STATUS.ERROR));
    }, [
      searchQuery?.page,
      searchQuery?.itemsPerPage,
      searchQuery?.author,
      searchQuery?.receiver,
      searchQuery?.conversationId,
      fetch,
    ]);
    return {
      messages_loading: notificationStatus === STATUS.LOADING,
      messages_error: notificationStatus === STATUS.ERROR,
      messages_data: messages,
    };
  },

  async getAllNotifications({ page = 1, itemsPerPage = 10 }) {
    let res = await Fetch.get(`${this._url}/notification?page=${page}&itemsPerPage=${itemsPerPage}`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something Went Wrong');
  },

  async getAllConversationMessages({ page = 1, itemsPerPage = 10, author = '', receiver = '', conversationId = '' }) {
    let res = await Fetch.get(
      `${this._url}/get-conversation-messages?page=${page}&itemsPerPage=${itemsPerPage}&author=${author}&receiver=${receiver}&conversationId=${conversationId}`,
    );
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something Went Wrong');
  },
};

export default notificationService;
