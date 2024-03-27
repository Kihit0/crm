import Api from "../core/api";
import { functionParams } from "../params/general.params";

const api = Api()

interface IPayloadSearch{
    keywords: string
}

const getSymbolSearch = (payload: IPayloadSearch) => api.getSearch(Object.assign({function: functionParams.SYMBOL_SEARCH}, payload)); 

export default getSymbolSearch;