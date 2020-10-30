import React, { createContext } from 'react';
import { BrowserRouter } from "react-router-dom";

import Layout from './layout';
import "./common/index.scss";

import config from "./config";

const ConfigContext = createContext({
  ...config
})

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ConfigContext.Provider value={config}>
        <Layout />
      </ConfigContext.Provider>
    </BrowserRouter>
  )
}
