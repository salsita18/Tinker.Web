import React from 'react';
import { Card } from 'antd';
import { Order } from './Models';

interface KanbanCardProps {
  order: Order;
}

const KanbanCard: React.FC<KanbanCardProps> = ({order}) => {
  return (
    <Card className='kanban-card-div'
//      onClick={() => fetchOrder(order.id)}
      title={order.orderTag}
      actions={[
        // <UserTag
        //   name={order.portfolioName}
        //   self={order.createdByUser}
        //   closable={false}
        // />,
        // <Tooltip placement='topRight' title={order.rejectReason}>
        //   <div>
        //     <OrderStateTag orderNumber={order.id} state={order.state}/>
        //   </div>
        // </Tooltip>
      ]}
    >
      <div>
        {order.items.map((i, idx) => <div key={idx}>{i.product} x {i.count}</div>)}
      </div>
    </Card>
  );
};

export default KanbanCard;