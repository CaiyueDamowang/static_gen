import React from 'react';
import './index.scss'


export const Navigation = (props) => {
  return (
    <Navbar />
  )
}

const Navbar = ({ title }) => {
  return (
    <nav className={'nav'}>
      <i className={'menu-controll'}>ic</i>
      <h1 className={'nav-title white-text'}>title</h1>
      <i className={'ssettings'}>ic</i>
    </nav>
  )
}
