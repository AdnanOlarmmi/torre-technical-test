import React, { useState } from 'react';
import Biopage from '../pages/Biopage';
import '../styles/Header.css';

function GetUser() {
  const [input, setInput] = useState('');
  const defaultBio = {
    userBio: {
      person: {
        name: 'Torre Bio',
        picture: 'https://torre.co/favicon.png',
      },
      strengths: [],
    },
  };
  const [bio, setBio] = useState(defaultBio);

  const getUserBio = async (username = 'olarmmi') => {
    const response = await fetch(`http://localhost:8080/bios/${username}`);
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
