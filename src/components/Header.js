import React from 'react';

function Header() {
  const handleSearch = (e) => {
    e.preventDefault();
  };

  const getUserBio = async (username) => {
    const response = await fetch('/api/notes');
    const data = await response.json();
    setNotes(data);
  };

  return (
    <div>
      <h1>Header</h1>
      <form>
        <input type="text" placeholder="Search..." />
      </form>
    </div>
  );
}

export default Header;
