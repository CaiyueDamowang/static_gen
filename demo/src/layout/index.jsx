import React from 'react';
import { Navigation } from "../components/navigation/index";
import { Footer } from "../components/footer/index";
import { Sidebar } from "../components/sidebar/index"

import './index.scss';

const Layout = () => {
  return (
    <div className={'layout'}>
      <Navigation />
      <Sidebar />

      <div style={{
        flexGrow:1,
      }}></div>

      <Footer></Footer>
    </div>
  )
}

export default Layout
