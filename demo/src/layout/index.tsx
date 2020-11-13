import React, { useState } from 'react';
import { css } from 'emotion';
import { Navigation } from '../components/navigation/index';
import { Footer } from '../components/footer/index';

import MD from '../../docs/babel-config.md';

const Layout: React.FC = () => {
  const [visibility, setVisibility] = useState<Boolean>();
  const toggle = () => setVisibility(!visibility);

  return (
    <div className={layout}>
      <Navigation toggleMenu={toggle} />
      <div style={{ flexGrow: 1 }}>
        <MD></MD>
      </div>
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
