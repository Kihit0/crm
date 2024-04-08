import Api from "../core/api";
import type { typeApiSearch } from "../params/search.params";

const api = Api();

const getSearch = (payload: typeApiSearch) => api.getSearch(payload);

export default getSearch;