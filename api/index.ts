const camelToCase = (str: string) =>
  str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);

const Api = (apiUrl: string) =>
  new Proxy(
    {},
    {
      get(_, method_name: string) {
        return async (props) => {
          const apiMethod = camelToCase(method_name);
          const httpMethod = apiMethod.split("_")[0].toUpperCase();
          const isGetMethod = httpMethod === "GET";
          const url = new URL(`${apiUrl}`);

          const options = {
            method: httpMethod,
            header: {
              "Content-Type": "application/json",
            },
          };

          if (isGetMethod) {
            url.search = new URLSearchParams(props).toString();
          } else {
            return null;
          }

          const response = await fetch(url, options);
          return response.json();
        };
      },
    }
  );

export default Api;
