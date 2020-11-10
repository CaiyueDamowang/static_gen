import React, { Children, useContext, useState } from "react";
import { css } from 'emotion';

import { Slider } from "../animated/slider";
import { Avatar } from "../avatar/index";
import { Menu } from '../menu/index';
import { SpringProps } from "react-spring/renderprops";
import { ConfigContext } from "../../store";

export const Sidebar: React.FC = () => {
  const width = 220;

  return (
    <StyledSidebar>
      <Slider distance={width}>
        <Container width={width}>
          <Avatar />
          <Menu />
        </Container>
      </Slider>
    </StyledSidebar>
  )
};

const Container: React.FC<{
  width: number,
  children: React.ReactElement[]
}> = ({ width, children }) => {
  return (
    <div
      className={css`
        padding: 40px 10px 0 20px;
        width: ${width}px;
        height: 100vh;
      
        background-color: #fff;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
        position: relative;
      `}
    >
      {children}
  </div>
  )
}

// modal
const StyledSidebar: React.FC = (props) => {
  return (
    <div className={css`
      min-height: 100vh;
      width: 100vw;
    
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    
      display: flex;
      z-index: 99`
    }>
      <div className={css`
        width: 100%;
        background-color: rgba(0, 0, 0, 0.2);`
      }>
        {props.children}
      </div>
    </div>
  )
}
