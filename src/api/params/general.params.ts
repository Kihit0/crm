export enum functionParams {
    TIME_SERIES_INTRADAY,
    TIME_SERIES_DAILY,
    TIME_SERIES_DAILY_ADJUSTED,
    TIME_SERIES_WEEKLY,
    TIME_SERIES_WEEKLY_ADJUSTED,
    TIME_SERIES_MONTHLY,
    TIME_SERIES_MONTHLY_ADJUSTED,
    GLOBAL_QUOTE,
    SYMBOL_SEARCH,
    MARKET_STATUS,
    NEWS_SENTIMENT,
    TOP_GAINERS_LOSERS,
  }

export enum intervalMinutes{
    min1 = "1min",
    min5 = "5min",
    min15 = "15min",
    min30 = "30min",
    min60 = "60min",
}

export type apiGeneral = {
  function: functionParams
}