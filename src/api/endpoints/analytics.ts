import Api from "../core/api";
import { calculationsAnalyticsParams, intervalAnalyticsParams, ohlcAnalyticsParams, rangeAnalyticsParams } from "../params/analytics.params";


const ANALYTICS_URL = "timeseries/analytics?"

const api = Api(ANALYTICS_URL);

interface IPayloadAnalytics {
    SYMBOLS: string;
    RANGE: rangeAnalyticsParams;
    OHLC?: ohlcAnalyticsParams;
    INTERVAL: intervalAnalyticsParams;
    CALCULATIONS: calculationsAnalyticsParams;
}

interface IPayloadAnalyticsWindow extends IPayloadAnalytics {
    WINDOW: number
} 


const getAnalytics = (payload:IPayloadAnalytics ) => api.getAnalytics(payload);
const getAnalyticsWindow = (payload: IPayloadAnalyticsWindow) => api.getAnalytics(payload);

export default {
    getAnalytics,
    getAnalyticsWindow
}