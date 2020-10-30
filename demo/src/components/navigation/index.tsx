import React from 'react';
import { css } from 'emotion';

export const Navigation: React.FC = (props) => {
  return (
    <Navbar />
  )
}

const Navbar = (): React.ReactElement => {
  return (
    <nav className={css`
      width: 100%;
      height: 60px;
      padding: 15px 0;
      background-color: #6fa7e4;
    
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    
      text-align: center;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    
      display: flex;
      justify-content: space-evenly;`
    }>
      <i className={'menu-controll'}>ic</i>
      <h1 className={css`
        margin: 0;
        padding: 0;
        font-size: 22px;
        line-height: 30px;
        position: relative;
      ` + 'white-text'}>title</h1>
      <i className={'settings'}>ic</i>
    </nav>
  )
}


