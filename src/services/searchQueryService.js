import { Fetch } from '../helpers/fetchWrapper';

const searchQueryService = {
  _url: process.env.REACT_APP_SEARCHQUERY_API_URL,

  async health() {
    const res = await Fetch.get(`${this._url}/searchQuery/health`);
    if (res.status >= 200 && res.status < 300) {
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
};
export default searchQueryService;
