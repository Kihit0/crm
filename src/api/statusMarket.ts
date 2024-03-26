import Api from "./core/api";
import { functionParams } from "./params/general.params";

const api = Api();

const getMarketStatus = () => api.getStatusMarket({ function: functionParams.MARKET_STATUS });

export default {
  getMarketStatus,
};
