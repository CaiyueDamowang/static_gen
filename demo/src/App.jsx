import React from 'react';
import { Navigation } from './components/navigation/';
import { Footer } from './components/footer/index';
import List from './docs/list.md';

export const App = () => (
  <>
    <Navigation />
    <List />
    <Footer />
  </>
);
