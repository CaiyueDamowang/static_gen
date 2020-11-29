import React, { useState } from 'react';
import { css } from 'emotion';
import { Navigation } from '../components/navigation/index';
import { View } from './view';
import { Footer } from '../components/footer/index';

const Layout: React.FC = () => {
  return (
    <div className={'flex-col min-h-full container'}>
      <Navigation />
      <View />
      <Footer></Footer>
    </div>
  )
};

export default Layout;

const layout = css`
  padding-top: 60px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
