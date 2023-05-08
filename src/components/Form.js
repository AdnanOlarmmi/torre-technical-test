import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getUserBio from '../api/getUserBio';

const Form = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const state = useSelector((state) => state);
  const { status } = state;
  useEffect(() => {
    if (status === 'idle') {
      dispatch(getUserBio(username));
    } else if (status === 'succeeded') {
      const fullBio = state.bio;
      if (fullBio?.person?.name) {
        const newBio = {
          person: {
            name: fullBio.person.name,
            picture: fullBio.person.picture,
          },
          strengths: fullBio.strengths,
        };
        console.log(newBio);
      }
    }
  }, [status, dispatch]);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getUserBio(username));
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
