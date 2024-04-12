import sendToWebSocket from "@api/core/ws";

const ticketHandler = new Map<string, Function[]>();

const subscribeToTickerWebSocket = (ticket: string) => {
  sendToWebSocket({
    type: "subscribe",
    symbol: ticket,
  });
};

const unsubscribeToTickerWebSocket = (ticket: string) => {
  sendToWebSocket({
    type: "unsubscribe",
    symbol: ticket,
  });
};

export const subscribeToTicker = (ticket: string, cb: Function) => {
  const subscribers = ticketHandler.get(ticket) ?? [];
  ticketHandler.set(ticket, [...subscribers, cb]);
  subscribeToTickerWebSocket(ticket);
};

export const unsubscribeToTicker = (ticket: string) => {
  ticketHandler.delete(ticket);
  unsubscribeToTickerWebSocket(ticket);
};

export default ticketHandler;
