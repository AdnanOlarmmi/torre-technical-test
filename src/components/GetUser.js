import React, { useState } from 'react';
import Biopage from '../pages/Biopage';
import '../styles/Header.css';

function GetUser() {
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

  const getUserBio = async (username) => {
    const response = await fetch(`https://enchanting-melba-5fb712.netlify.app/.netlify/functions/server/bios/${username}`);
    const data = await response.json();
    setBio({
      userBio: data,
    });
  };

  return (
    <div>
      <div className="header">
        <span className="material-symbols-outlined hamburger">
          menu
        </span>
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
      </div>
      <Biopage person={bio.userBio.person} strengths={bio.userBio.strengths} />
    </div>
  );
}

export default GetUser;
