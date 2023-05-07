import React, { useState } from 'react';
import Biopage from '../pages/Biopage';

function Header() {
  const [input, setInput] = useState('');
  const defaultBio = {
    userBio: {
      person: {
        name: 'unknown',
        picture: 'https://example.com/default-picture.jpg',
      },
      strengths: [],
    },
  };
  const [bio, setBio] = useState(defaultBio);

  const getUserBio = async (username = 'olarmmi') => {
    const response = await fetch(`http://localhost:8000/bios/${username}`);
    const data = await response.json();
    setBio({
      userBio: data,
    });
  };

  return (
    <div>
      <h1>Header</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        getUserBio(input);
      }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Search..."
        />
      </form>
      <Biopage person={bio.userBio.person} strengths={bio.userBio.strengths} />
    </div>
  );
}

export default Header;
