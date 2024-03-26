import type { API } from "./api.interface";

const API_URL = "https://www.alphavantage.co";

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
          const url = new URL(`${API_URL}/${apiSearch ? apiMethod : "query?"}`);

          const options = {
            method: httpMethod,
            header: {
              "Content-Type": "application/json",
            },
          };

          if (isGetMethod) {
            url.search = new URLSearchParams(
              Object.assign(
                {
                  apikey: import.meta.env.VITE_API_KEY || "demo",
                },
                props
              )
            ).toString();
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
