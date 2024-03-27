import Api from "../core/api";
import { functionParams } from "../params/general.params";
import { sortNews, topicsNews } from "../params/news.params";

const api = Api();

interface IPayloadNews{
    tickers: string;
    topics: topicsNews,
    sort: sortNews,
    limit: number
}

const getNews = (payload: IPayloadNews) => api.getNews(Object.assign({function: functionParams.NEWS_SENTIMENT}, payload));

export default {
    getNews
}