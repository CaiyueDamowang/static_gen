import React, { useContext } from 'react';
import { css } from 'emotion';
import { ConfigContext, NavigationProps } from '../../store';

export const Navigation: React.FC<{
  toggleMenu: Function;
}> = ({ toggleMenu }) => {
  const { navigation }  = useContext(ConfigContext);

  return (
    <Navbar {...navigation} handleClick={toggleMenu} />
  )
};

interface InteractiveNav extends NavigationProps {
  handleClick: Function;
};

const Navbar: React.FC<InteractiveNav> = props => {
  const handleClick = () => props.handleClick();
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
      <span className={'menu-controll'} onClick={handleClick}>ic</span>
      <h1 className={css`
        margin: 0;
        padding: 0;
        font-size: 22px;
        line-height: 30px;
        position: relative;
        ` + ' white-text'}>{ props.title }</h1>
      <i className={'settings'}>ic</i>
    </nav>
  );
};
