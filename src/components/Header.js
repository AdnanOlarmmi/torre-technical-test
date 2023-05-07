import React from 'react';
import GetUser from './GetUser';
import '../styles/Header.css';

const Header = () => (
  <div className="header">
    <span className="material-symbols-outlined">
      menu
    </span>
    <GetUser />
  </div>
);

export default Header;
