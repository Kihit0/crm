const subscribersHandler = new Map<string, Function[]>();

const loadedSubscribe = () => {
  if(subscribersHandler.size === 0) return;

  Array.from(subscribersHandler.keys()).forEach(item => {
    subscribersHandler.get(item)?.forEach(fn => {
      fn(item)
    })
  })
  
}

export const subscribe = (itemSubscribe: string, cd: Function) => {
  const subscribers = subscribersHandler.get(itemSubscribe) ?? [];
  subscribersHandler.set(itemSubscribe, [...subscribers, cd]);  
}


export const unsubscribe = (itemSubscribe: string) => {
  subscribersHandler.delete(itemSubscribe)
}

setInterval(loadedSubscribe, 10000);