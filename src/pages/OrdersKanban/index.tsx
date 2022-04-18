import React from 'react';
import { Col, Row } from 'antd';
import './orders-kanban.css';
import OrdersKanbanContainer from './OrdersKanbanContainer';
import useOrders from './useOrders';
import KanbanCard from './KanbanCard';

const OrdersKanban: React.FC = () => {
  const [orders, loading] = useOrders('cocina');
//  const [kanbanColumns] = useKanban('cocina', orders);

  return (
    <Row className='kanban-row'>
      <Col span={8} xxl={8} xl={8} lg={8} md={8} sm={8} xs={8}>
        <OrdersKanbanContainer
          loading={false}
          title='Pendientes'
          empty='No hay comandas pendientes'
          tag={KanbanCard}
          fetchOrder={(x) => { }}
          fetchedOrder={1}
          orders={orders}
        />
      </Col>
      <Col span={8} xxl={8} xl={8} lg={8} md={8} sm={8} xs={8}>
        <OrdersKanbanContainer
          loading={false}
          title='Preparando'
          empty='No hay comandas en preparación'
          tag='div'
          fetchOrder={(x) => { }}
          fetchedOrder={1}
          orders={[]}
        />
      </Col>
      <Col span={8} xxl={8} xl={8} lg={8} md={8} sm={8} xs={8}>
        <OrdersKanbanContainer
          loading={false}
          title='Listas'
          empty='No hay comandas listas'
          tag='div'
          fetchOrder={(x) => { }}
          fetchedOrder={1}
          orders={[]}
        />
      </Col>
    </Row>
  );
};

export default OrdersKanban;