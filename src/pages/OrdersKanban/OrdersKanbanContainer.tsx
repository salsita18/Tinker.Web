import React from 'react';

interface OrdersKanbanContainerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  title?: React.ReactNode;
  loading: boolean;
  orders: any[];
  tag: any;
  fetchOrder: (id: number) => void;
  fetchedOrder: number | null;
  empty: React.ReactNode;
}

const OrdersKanbanContainer: React.FC<OrdersKanbanContainerProps> = (props) => {
  const { title, loading, orders, tag, fetchOrder, fetchedOrder, empty } = props;

  const Tag = tag;

  return (
    <div className="kanban-container-div">
      <div className='kanban-containter-title-div'>
        {title}
      </div>
      { 
        loading ?
          [1,2,3].map(x => <div key={x}/>) :
          !orders.length ?
          empty :
          orders.map(o => ( 
            <Tag
              key={o.id} 
              isSelected={fetchedOrder === o.id} 
              fetchOrder={fetchOrder} 
              order={o}
            />
          ))
      }
    </div>
  );
};

export default OrdersKanbanContainer;