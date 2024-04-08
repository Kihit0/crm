import { IDataEvent } from "./interfaces/ws.interface";
import ticketHandler from "./observer";

const API_KEY = import.meta.env.VITE_API_KEY || "";
const API_URL = "wss://ws.finnhub.io";

const params = new URLSearchParams({ token: API_KEY }).toString();
const url = new URL(API_URL);
url.search = params;

const socket = new WebSocket(url);

const sendToWebSocket = (payload: { type: string; symbol: string }) => {
  const stringifiedMessage = JSON.stringify(payload);

  if (socket.readyState === WebSocket.OPEN) {
    socket.send(stringifiedMessage);
    return;
  }

  socket.addEventListener("open", () => socket.send(stringifiedMessage), {
    once: true,
  });
};

socket.addEventListener("message", (event: MessageEvent) => {
  const { data, type }: { data: IDataEvent[] | undefined; type: string } =
    JSON.parse(event.data);

  if (typeof type !== "string" || type === "ping" || !data) return;
  const uniqueSymbol = [...new Set(data.map((ticker) => ticker.s))];

  const functionTickerHandler = uniqueSymbol.map((ticker) => {
    return {
      type: ticker,
      price: data.filter(({ s }) => s === ticker).map(({ p }) => p),
      fn: ticketHandler.get(ticker),
    };
  });

  functionTickerHandler.forEach(
    (item) => item.fn !== undefined && item.fn.forEach(cb => cb(item.price))
  );
});


export default sendToWebSocket;