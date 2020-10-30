import React from "react";
import { css } from "emotion";

export const Avatar: React.FC = (props) => {

  return (
    <StyledAvatar />
  )
}

const StyledAvatar: React.FC = () => {

  return (
    <div className={css`
      padding: 30px 20px;
      display: flex;
      justify-content: space-between;`
    }>
    <div className={css`
      width: 40px;
      height: 40px;
      border-radius: 50%;
      
      display: inline-block;
      border: 1px solid #000;
    `}>
      <img src="" alt=""/>
    </div>
    <div className={css`
      padding-left: 10px;
      flex: 1;
    `}>
      <div className={'nickname'}>nickname</div>
      <div className={'motto small-text'}>this is a motto</div>
    </div>
  </div>
  )
}
