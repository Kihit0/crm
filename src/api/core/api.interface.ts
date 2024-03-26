import type { apiAnalyticsSearch } from "../params/analytics.params";
import type { apiGeneral } from "../params/general.params";
import type { apiNewsSearch } from "../params/news.params";
import type { apiLazySearch } from "../params/search.params";
import type { apiPriceSearch } from "../params/price.params";

export interface API {
  getPrice: (props: apiPriceSearch) => Promise<any>;
  getNews: (props: apiNewsSearch) => Promise<any>;
  getSearch: (props: apiLazySearch) => Promise<any>;
  getAnalytics: (props: apiAnalyticsSearch) => Promise<any>;
  getStatusMarket: (props: apiGeneral) => Promise<any>;
  getTopGainersAndLosers: (props: apiGeneral) => Promise<any>;
}
