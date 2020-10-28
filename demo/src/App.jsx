import React from 'react';
import Router from "./router/index";
import { BrowserRouter } from "react-router-dom";

import { Navigation } from './components/navigation/';
import { Footer } from './components/footer/index';

import List from "./docs/list.md";
import "./app.scss";

export const App = () => (
  <>
    <Navigation />
    <BrowserRouter>
      <List />
      <Router />
    </BrowserRouter>
    <Footer />
  </>
);
