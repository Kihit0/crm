import type { apiGeneral, intervalMinutes } from "./general.params";

export type apiPriceSearch = {
  symbol?: string;
  interval?: intervalMinutes;
  keywords?: string;
} | apiGeneral;
