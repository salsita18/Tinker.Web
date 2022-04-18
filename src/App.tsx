import { Layout } from 'antd';
import React from 'react';
import OrdersKanban from './pages/OrdersKanban';
import './App.css';
import 'antd/dist/antd.dark.min.css';

const App: React.FC = () => {
  return (
    <Layout className='site-layout site-layout-theme'>
      <Layout.Content className='site-layout-background' style={{ margin: '24px' }}>
        <OrdersKanban/>
      </Layout.Content>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          {message}
        </div>
      </header> */}
    </Layout>
  );
}

export default App;