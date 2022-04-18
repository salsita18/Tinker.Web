export type Order = {
  id: number;
  priority: OrderPrioty;
  estimatedMinutes: number;
  waiter: string;
  orderTag: string;
  creationDate: Date;
  finishDate?: Date;
  items: OrderItem[];
};

type OrderItem = {
  product: string;
  count: number;
};

type OrderPrioty = 'low' | 'medium' | 'high';