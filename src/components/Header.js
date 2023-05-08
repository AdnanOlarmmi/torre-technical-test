import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getUserBio from '../api/getUserBio';

const handleSubmit = (e) => {
  e.preventDefault();
  dispatch(getUserBio(username));
};

const Header = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  return (
    <header>
      <span className="material-symbols-outlined hamburger">
        menu
      </span>
      <form onSubmit={handleSubmit}>
        <input
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </form>
    </header>
  );
};

export default Header;
