import React, { createContext } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ConfigContext } from './store/index';
import Layout from './layout';
import config from './config';

import './common/index.scss';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
        <ConfigContext.Provider value={config}>
          <Layout />
        </ConfigContext.Provider>
    </BrowserRouter>
  )
}
