import React from 'react';
import Router from "./router/index";
import { BrowserRouter } from "react-router-dom";

import "./app.scss";
import Layout from './layout';

export const App = () => (
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);
