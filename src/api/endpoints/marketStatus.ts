import Api from "../core/api";
import type { typeApiMarketStatus } from "../params/marketStatus.params";


const QUERY_URL_STATUS = "stock/market-status?";
const QUERY_URL_HOLIDAY = "stock/market-holiday?"
const api = Api(QUERY_URL_STATUS);

const getMarketStatus = (payload: typeApiMarketStatus) => api.getMarketStatus(payload);
const getMarketStatusHoliDay = (payload: typeApiMarketStatus) => Api(QUERY_URL_HOLIDAY).getMarketStatusHoliDay(payload);

export default {
  getMarketStatus,
  getMarketStatusHoliDay
};