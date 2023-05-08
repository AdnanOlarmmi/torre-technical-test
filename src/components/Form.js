import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getUserBio from '../api/getUserBio';

const Form = () => {
  const [username, setUsername] = useState('');
  console.log('lsd');
  const userBio = useSelector((state) => state.bio);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getUserBio(username));
    console.log(username);
    console.log(userBio);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default Form;
