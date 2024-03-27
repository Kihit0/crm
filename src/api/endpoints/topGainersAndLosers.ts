import Api from "../core/api";
import { functionParams } from "../params/general.params";

const api = Api();

const getTopGainersAndLosers = () => api.getTopGainersAndLosers({function: functionParams.TOP_GAINERS_LOSERS});

export default getTopGainersAndLosers;