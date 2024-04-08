import sendToWebSocket from "./ws";

const ticketHandler = new Map<string, Function[]>();

const subscribeToTickerWebSocket = (ticker: string) => {
  sendToWebSocket({
    type: "subscribe",
    symbol: ticker,
  });
};

const unsubscribeToTickerWebSocket = (ticker: string) => {
  sendToWebSocket({
    type: "unsubscribe",
    symbol: ticker,
  });
};

export const subscribeToTicker = (ticker: string, cb: Function) => {
  const subscribers = ticketHandler.get(ticker) ?? [];
  ticketHandler.set(ticker, [...subscribers, cb]);
  subscribeToTickerWebSocket(ticker);
};

export const unsubscribeToTicker = (ticker: string) => {
  ticketHandler.delete(ticker);
  unsubscribeToTickerWebSocket(ticker);
};

export default ticketHandler;
