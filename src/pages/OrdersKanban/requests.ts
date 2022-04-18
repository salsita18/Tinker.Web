import axios, { AxiosResponse } from "axios";
import { Order } from "./Models";

export const getActiveOrdersByTerminal = (terminalIdentifier: string) => axios
  .get(`terminals/${terminalIdentifier}}/orders/active`)
    .then(mapResponse);

const mapResponse = (res: AxiosResponse<Order[]>) => res.data.map(o => (
  {
    ...o, 
    creationDate: new Date(o.creationDate),
    finishDate: o.finishDate ? new Date(o.finishDate) : o.finishDate
  }
));