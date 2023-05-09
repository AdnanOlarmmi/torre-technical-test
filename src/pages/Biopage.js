import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import skillsArranged from '../helperFxns/skillsArranged';
import handleFaviconChange from '../helperFxns/handleFavicon';
import SkillsInfo from './SkillsInfo';
import '../styles/Biopage.css';

const Biopage = () => {
  const proficiencyLevels = ['master', 'expert', 'proficient', 'beginner', 'no-experience-interested'];
  const state = useSelector((state) => state);
  const [newSkill, setNewSkill] = useState('null');
  const { bio } = state;
  if (bio?.person?.name) {
    handleFaviconChange(bio.person.picture);
    return (
      <div className="bio__container">
        <div className="bio__image-container">
          <img src={bio.person.picture} alt={bio.person.name} />
        </div>
        <h3 className="bio__username">{ bio.person.name }</h3>
        <section>
          <h4 className="bio__heading">Skills and Interests:</h4>
          {skillsArranged({
            strengths: bio.strengths,
            proficiencyLevels,
            onClick: (skill) => {
              setNewSkill(skill);
            },
          })}
        </section>
        <SkillsInfo newSkill={newSkill} />
      </div>
    );
  } return <p />;
};

export default Biopage;
