import React, { useContext } from 'react';
import { css } from 'emotion';
import { ConfigContext, NavigationProps } from '../../store';

export const Navigation: React.FC<{
}> = props => {
  const { navigation }  = useContext(ConfigContext);

  return (
    <Navbar {...navigation} />
  )
};

interface InteractiveNav extends NavigationProps {

};

const Navbar: React.FC<InteractiveNav> = props => {

  return (
    <nav className={'container'}>
      <h1>{ props.title }</h1>
    </nav>
  );
};
