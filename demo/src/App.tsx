import React from 'react';
import { BrowserRouter } from "react-router-dom";

import Layout from './layout';
import "./common/index.scss";


export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}
