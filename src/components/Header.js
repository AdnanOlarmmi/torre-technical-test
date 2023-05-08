import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getUserBio from '../api/getUserBio';

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
      <span className="material-symbols-outlined hamburger">
        menu
      </span>
      <h4>
        torre
        <span>.co</span>
      </h4>
      <span className="material-symbols-outlined">
        search
      </span>
      <form onSubmit={handleSubmit}>
        <input
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </form>
      <p>SIGN IN</p>
    </header>
  );
};

export default Header;
