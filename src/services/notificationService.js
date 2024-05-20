import { Fetch } from '../helpers/fetchWrapper';

const notificationService = {
  _url: process.env.REACT_APP_NOTIFICATION_API_URL,

  async health() {
    const res = await Fetch.get(`${this._url}/notification/health`);
    if (res.status >= 200 && res.status < 300) {
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
};
export default notificationService;
