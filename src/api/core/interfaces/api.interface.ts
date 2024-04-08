import type { typeApiMarketStatus } from "@api/params/marketStatus.params";
import type { typeApiNews } from "@api/params/news.params";
import type { typeApiSearch } from "@api/params/search.params";
import type { typeApiStock } from "@api/params/stock.params";

export interface API {
  getSearch: (props: typeApiSearch) => Promise<any>;
  getStock: (props: typeApiStock) => Promise<any>;
  getMarketStatus: (props: typeApiMarketStatus) => Promise<any>;
  getMarketStatusHoliDay: (props: typeApiMarketStatus) => Promise<any>;
  getNews: (props: typeApiNews) => Promise<any>;
}
