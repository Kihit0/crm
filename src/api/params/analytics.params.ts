import type { intervalMinutes } from "./general.params";

export enum rangeAnalyticsParams {
  full,
  day,
  week,
  month,
  year,
}

export enum intervalAnalyticsParams {
  DAILY = "DAILY",
  WEEKLY = "WEEKLY",
  MONTHLY = "MONTHLY",
}

export enum ohlcAnalyticsParams {
  open,
  high,
  low,
  close,
}

export enum calculationsAnalyticsParams {
  MEAN,
  MEDIAN,
  CUMULATIVE_RETURN,
  VARIANCE,
  STDDEV,
  /*     COVARIANCE,
    CORRELATION */
}

export type apiAnalyticsSearch = {
  SYMBOLS: string;
  RANGE: rangeAnalyticsParams;
  INTERVAL: intervalAnalyticsParams | intervalMinutes;
  OHLC?: ohlcAnalyticsParams;
  CALCULATIONS: calculationsAnalyticsParams;
  WINDOW_SIZE?: number;
};
