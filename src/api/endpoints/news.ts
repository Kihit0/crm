import Api from "../core/api";
import type { typeApiNews } from "../params/news.params";

const QUERY_URL = "news?"
const api = Api(QUERY_URL);

const getNews = (payload: typeApiNews) => api.getNews(payload);

export default getNews;