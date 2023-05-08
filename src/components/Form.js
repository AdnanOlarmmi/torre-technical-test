import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const Form = () => {
  const [username, setUsername] = useState('');
  console.log('lsd');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_USER', payload: username });
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
