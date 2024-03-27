import Api from "../core/api";
import { intervalMinutes, functionParams } from "../params/general.params";

const api = Api()

interface IPayloadPrice{
    symbol: string;
    interval: intervalMinutes;
}

interface IPayloadQuote{
    symbol: string
}


const getIntraday = (payload: IPayloadPrice) => api.getPrice(Object.assign({function: functionParams.TIME_SERIES_INTRADAY}, payload)); 
const getDaily = (payload: IPayloadPrice) => api.getPrice(Object.assign({function: functionParams.TIME_SERIES_DAILY}, payload)); 
const getDailyAdjusted = (payload: IPayloadPrice) => api.getPrice(Object.assign({function: functionParams.TIME_SERIES_DAILY_ADJUSTED}, payload)); 
const getWeekly = (payload: IPayloadPrice) => api.getPrice(Object.assign({function: functionParams.TIME_SERIES_WEEKLY}, payload)); 
const getWeeklyAbjusted = (payload: IPayloadPrice) => api.getPrice(Object.assign({function: functionParams.TIME_SERIES_WEEKLY_ADJUSTED}, payload));
const getMonthly = (payload: IPayloadPrice) => api.getPrice(Object.assign({function: functionParams.TIME_SERIES_MONTHLY}, payload)); 
const getMonthlyAbjusted = (payload: IPayloadPrice) => api.getPrice(Object.assign({function: functionParams.TIME_SERIES_MONTHLY_ADJUSTED}, payload)); 
const getGlobalQuote =  (payload: IPayloadQuote) => api.getPrice(Object.assign({function: functionParams.GLOBAL_QUOTE}, payload)); 

export default {
    getIntraday,
    getDaily,
    getDailyAdjusted,
    getWeekly,
    getWeeklyAbjusted,
    getMonthly,
    getMonthlyAbjusted,
    getGlobalQuote
}