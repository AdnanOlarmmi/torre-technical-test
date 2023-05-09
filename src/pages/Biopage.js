import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import StrengthContext from '../helperFxns/StrengthContext';
import skillsArranged from '../helperFxns/skillsArranged';
import handleFaviconChange from '../helperFxns/handleFavicon';
import '../styles/Biopage.css';

const Biopage = () => {
  const proficiencyLevels = ['master', 'expert', 'proficient', 'beginner', 'no-experience-interested'];
  const state = useSelector((state) => state);
  const [selectedStrength, setSelectedStrength] = useState(null);
  const { bio } = state;
  if (bio?.person?.name) {
    handleFaviconChange(bio.person.picture);
    return (
      <StrengthContext.Provider value={{ selectedStrength, setSelectedStrength }}>
        <div className="bio__container">
          <div className="bio__image-container">
            <img src={bio.person.picture} alt={bio.person.name} />
          </div>
          <h3 className="bio__username">{ bio.person.name }</h3>
          <section>
            <h4 className="bio__heading">Skills and Interests:</h4>
            {skillsArranged(bio.strengths, proficiencyLevels)}
          </section>
        </div>
      </StrengthContext.Provider>
    );
  } return null;
};

export default Biopage;
