import React from 'react';
import Router from "./router/index";
import { BrowserRouter } from "react-router-dom";

import { Navigation } from './components/navigation/';
import { Footer } from './components/footer/index';

import "./app.scss";

import config from './config';

const { navigation, sidebar, footer } = config

export const App = () => (
  <>
    <Navigation config={navigation} />
    
    <BrowserRouter>

      <Router />
    </BrowserRouter>
    <Footer config={footer} />
  </>
);
