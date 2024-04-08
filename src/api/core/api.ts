import type { API } from "./interfaces/api.interface";

const API_URL = "https://finnhub.io/api/";
const API_VERSION = "v1";

const camelToCase = (str: string) =>
  str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);

const Api = (apiSearch?: string) =>
  new Proxy(
    {},
    {
      get(_, method_name: string) {
        return async (props: any) => {
          const apiMethod = camelToCase(method_name);
          const httpMethod = apiMethod.split("_")[0].toUpperCase();
          const isGetMethod = httpMethod === "GET";
          const url = new URL(`${API_URL + API_VERSION}/${apiSearch ? apiSearch : "search?"}`);

          const options = {
            method: httpMethod,
            header: {
              "Content-Type": "application/json",
            },
          };

          if (isGetMethod) {
            url.search = new URLSearchParams(
              Object.assign({
                token: import.meta.env.VITE_API_KEY || ""
              }, props)).toString();
          } else {
            return null;
          }

          const response = await fetch(url, options);
          return response.json();
        };
      },
    }
  ) as API;

export default Api;
