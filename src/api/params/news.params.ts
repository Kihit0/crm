export enum categoryNews {
  general = "general",
  forex = "forex",
  crypto = "crypto",
  merge = "merge"
}

export type typeApiNews = {
    category: categoryNews;
    minId?: number;
}