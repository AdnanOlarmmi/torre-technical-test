import React from 'react';
import Header from './components/Header';
import Biopage from './pages/Biopage';
import SkillsInfo from './pages/SkillsInfo';

function App() {
  return (
    <div className="content">
      <Header />
      <Biopage />
      <SkillsInfo />
    </div>
  );
}

export default App;
