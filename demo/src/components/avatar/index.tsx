import React, { useContext } from 'react';
import { css } from 'emotion';
import { ConfigContext, UserInfo } from '../../store';

export const Avatar: React.FC = () => {
  const {
    sidebar: {
      userInfo
    }
  } = useContext(ConfigContext);

  return (
    <StyledAvatar userInfo={userInfo}/>
  )
}

const StyledAvatar: React.FC<{
  userInfo: UserInfo
}> = ({ userInfo: {
  avatar,
  nickName,
  motto
} }) => {
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
      <img src={avatar} alt=""/>
    </div>
    <div className={css`
      padding-left: 10px;
      flex: 1;
    `}>
      <div className={'nickname'}>{nickName}</div>
      <div className={'motto small-text'}>{motto}</div>
    </div>
  </div>
  )
}
