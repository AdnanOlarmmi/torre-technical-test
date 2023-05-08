import React from 'react';
import { useSelector } from 'react-redux';
import skillsArranged from '../helperFxns/skillsArranged';

const Biopage = () => {
  const proficiencyLevels = ['master', 'expert', 'proficient', 'beginner', 'no-experience-interested'];
  const state = useSelector((state) => state);
  const { bio } = state;
  if (bio?.person?.name) {
    return (
      <div>
        { bio.person.name }
        <img src={bio.person.picture} alt={bio.person.name} />
        {skillsArranged(bio.strengths, proficiencyLevels)}
      </div>
    );
  } return null;
};

export default Biopage;
