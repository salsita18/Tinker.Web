import { HubConnectionBuilder, HttpTransportType, HubConnectionState } from '@microsoft/signalr';

const conn = new HubConnectionBuilder()
.withAutomaticReconnect()
.withUrl('https://localhost:7140/hub/orders', HttpTransportType.WebSockets)
.build();

export const connect = () => {
  if (conn.state === HubConnectionState.Disconnected
    || conn.state === HubConnectionState.Disconnecting) {
    conn.start().then(() => console.log('Hub connected!')).catch((e: any) => console.log(e));
  }
};
  
export const discoonect = () => {
  if (conn.state === HubConnectionState.Connected
    || conn.state === HubConnectionState.Connecting) {
    conn.stop().catch((e: any) => console.log(e));
  }
};

export type OrderEventPayloadBase<T> = {
  title: string;
  message: string;
  content: T;
  notificationType: number;
  notificationTypeString: 'info' | 'warning' | 'success' | 'error';
  sourceRole: string;
  targetRole: string;
  userId: string;
};

export type EventCancelPayload = {
  orderId: number;
  portfolio: string;
};

type CreationEventContent = {
  product: string;
  count: number;
}[];

export type OrderCreationPayload = OrderEventPayloadBase<CreationEventContent>;

type OrderCreatedEvent = { 
  channel: 'orderCreated';
  handle: (payload: OrderCreationPayload) => void;
};

// type OrderStartedEvent = {
//   channel: 'orderStarted';
//   handle: (payload: OrderEventPayloadBase) => void;
// };

// type OrderCanceledEvent = {
//   channel: 'orderCanceled';
//   handle: (payload: EventCancelPayload) => void;
// };

// type OrderFinishedEvent = {
//   channel: 'orderFinished';
//   handle: (payload: OrderEventPayloadBase) => void;
// }

// type OrderServedEvent = {
//   channel: 'orderServed';
//   handle: (payload: OrderEventPayloadBase) => void;
// }

type OrderEvent = OrderCreatedEvent;
  // | OrderStartedEvent 
  // | OrderCanceledEvent 
  // | OrderFinishedEvent
  // | OrderServedEvent;

export const subscribe = (event: OrderEvent) => {
  connect();
  conn.on(event.channel, event.handle);
};

export const unSubscribe = (event: OrderEvent) => {
  conn.off(event.channel, event.handle);
};