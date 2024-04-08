export interface IDataEvent {
  p: number; //price
  s: string; //symbol === name ticker
  t: number; //UNIX milliseconds timestamp
  v: number; //volume
}