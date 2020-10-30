import React, { Children } from "react";
import { css } from 'emotion';

import { Slider } from "../animated/slider";
import { Avatar } from "../avatar/index";
import { List } from '../list/index';
import { SpringProps } from "react-spring/renderprops";

export const Sidebar: React.FC = React.memo(() => {
  const width = 230;
  const leftInAnimated: SpringProps = {
    from: { left: -width },
    to: { left: 0 },
  }

  return (
    <StyledSidebar>
      <Slider animationConfig={leftInAnimated}>
        <Container width={width}>
          <Avatar />
          <List dataSource={[]} />
        </Container>
      </Slider>
    </StyledSidebar>
  )
})

const Container: React.FC<{
  width: number
}> = ({ width, children }) => {
  return (
    <div
      className={css`
        padding: 40px 10px 0 20px;
        width: ${width}px;
        height: 100%;
      
        background-color: #fff;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
        position: relative;
      `}
    >
      {children}
  </div>
  )
}

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

