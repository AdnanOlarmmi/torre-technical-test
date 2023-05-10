import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getUserBio from '../api/getUserBio';
import '../styles/Header.css';

const Header = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const state = useSelector((state) => state);
  const { status } = state;
  useEffect(() => {
    if (status === 'idle' && formSubmitted) {
      dispatch(getUserBio(username));
      setFormSubmitted(false);
    }
  }, [status, formSubmitted, dispatch, username]);
  const searchRef = useRef(null);
  const formRef = useRef(null);
  const searchIconRef = useRef(null);
  const [searchActive, setSearchActive] = useState(false);

  const handleClick = () => {
    setSearchActive(true);
    searchIconRef.current.classList.add('hide');
    formRef.current.classList.remove('hide');
    formRef.current.querySelector('input').focus();
  };

  const handleClickOutside = (event) => {
    if (
      searchRef.current
      && !searchRef.current.contains(event.target)
      && event.target !== formRef.current
      && event.target.tagName.toLowerCase() !== 'input'
      && event.target.tagName.toLowerCase() !== 'button'
    ) {
      setSearchActive(false);
      searchIconRef.current.classList.remove('hide');
      formRef.current.classList.add('hide');
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getUserBio(username));
    setFormSubmitted(true);
    setUsername('');
    setSearchActive(false);
    searchIconRef.current.classList.remove('hide');
    formRef.current.classList.add('hide');
  };
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  return (
    <header id="header">
      <span className="material-symbols-outlined header__hamburger btn--white--pointer">
        menu
      </span>
      <h4 className="header__logo btn--white--pointer">
        torre
        <span>.co</span>
      </h4>
      <div ref={searchRef}>
        <form ref={formRef} onSubmit={handleSubmit} className={`${searchActive || 'hide'} header__form`}>
          <input
            value={username}
            placeholder="Search by username..."
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </form>
      </div>
      <div className="header__right">
        <button type="button" ref={searchIconRef} onClick={handleClick} className="material-symbols-outlined header__search btn--white--pointer">
          search
        </button>
        <span className="header__signin btn--white--pointer">SIGN IN</span>
      </div>
    </header>
  );
};

export default Header;
