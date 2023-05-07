import React, { useState } from 'react';
import Biopage from '../pages/Biopage';

function Header() {
  const [input, setInput] = useState('');
  const [bio, setBio] = useState([]);

  const getUserBio = async (username) => {
    const response = await fetch(`http://localhost:8000/bios/${username}`);
    const data = await response.json();
    setBio(data);
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
      <Biopage userBio={bio} />
    </div>
  );
}

export default Header;
