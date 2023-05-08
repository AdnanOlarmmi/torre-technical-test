import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getUserBio from '../api/getUserBio';
import '../styles/Header.css';

const Header = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const state = useSelector((state) => state);
  const { status } = state;
  useEffect(() => {
    if (status === 'idle') {
      dispatch(getUserBio(username));
    }
  }, [status, dispatch, username]);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getUserBio(username));
  };
  return (
    <header>
      <span className="material-symbols-outlined header__hamburger btn--white--pointer">
        menu
      </span>
      <h4 className="header__logo btn--white--pointer">
        torre
        <span>.co</span>
      </h4>
      <form onSubmit={handleSubmit}>
        <input
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </form>
      <span className="material-symbols-outlined header__search btn--white--pointer">
        search
      </span>
      <p className="header__signin btn--white--pointer">SIGN IN</p>
    </header>
  );
};

export default Header;
