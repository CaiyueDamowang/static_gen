import React from 'react';
import './index.scss'


export const Navigation = (props) => {
  const { config } = props;
  const { title } = config;
  return (
    <nav className={'nav'}>
      {/* <title> {title} </title> */}
      {title}
    </nav>
  )
}
