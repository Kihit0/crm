import Api from "../core/api";
import type { typeApiStock } from "../params/stock.params";

const QUERY_URL = "stock/symbol?"
const api = Api(QUERY_URL);

const getStock = (payload: typeApiStock) => api.getStock(payload);

export default getStock;