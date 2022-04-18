import React from 'react';
import { Order } from './Models';
import { EventCancelPayload, OrderCreationPayload, OrderEventPayloadBase, subscribe, unSubscribe } from '../../helpers/OrdersHub';
import { getActiveOrdersByTerminal } from './requests';
import { notification } from 'antd';

notification.config({
  placement: 'topRight',
  duration: 5
});

const useOrders = (terminal: string) : [orders: Order[], loading: boolean] => {
  const [loading, setLoading] = React.useState(true);
  const [orders, setOrders] = React.useState<Order[]>([]);

  const handle = (payload: OrderCreationPayload) : void => {
    notification.info({ message: payload.title, description: payload.message });
    setOrders(curr => [...curr, {
      id: 1,
      priority: 'high',
      estimatedMinutes: 1,
      waiter: 'jorge',
      orderTag: payload.message,
      creationDate: new Date(),
      items: payload.content
    }])
    // getActiveOrdersByTerminal(terminal)
    //   .then(setOrders);
  };

  React.useEffect(() => {
    getActiveOrdersByTerminal(terminal).then(data => {
      setOrders(data);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, [terminal]);

  React.useEffect(() => {
    subscribe({ channel: 'orderCreated', handle });

    return () => { 
      unSubscribe({ channel: 'orderCreated', handle });
    }
  });
  
  return [orders, loading];
};

export default useOrders;