import { apiGeneral } from "./general.params";

export enum topicsNews {
    blockchain,
    earnings,
    ipo,
    mergers_and_acquisitions,
    financial_markets,
    economy_fiscal,
    economy_monetary,
    economy_macro,
    energy_transportation,
    finance,
    life_sciences,
    manufacturing,
    real_estate,
    retail_wholesale,
    technology,
}

export enum sortNews{
  LATEST,
  EARLIEST,
  RELEVANCE
}

export type apiNewsSearch = {
  tickers?: string;
  topics?: topicsNews;
  sort: sortNews;
  limit: number;
} | apiGeneral