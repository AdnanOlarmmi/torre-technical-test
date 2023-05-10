import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import skillsArranged from '../helperFxns/skillsArranged';
import handleFaviconChange from '../helperFxns/handleFavicon';
import SkillsInfo from './SkillsInfo';
import '../styles/Biopage.css';

const Biopage = () => {
  const proficiencyLevels = ['master', 'expert', 'proficient', 'beginner', 'no-experience-interested'];
  const state = useSelector((state) => state);
  const [newSkill, setNewSkill] = useState(null);
  const [showInfo, setShowInfo] = useState(false);
  const reset = () => setShowInfo(false);
  const { bio } = state;
  if (bio?.person?.name) {
    handleFaviconChange(bio.person.picture);
    return (
      <div className="bio__container">
        {showInfo && <SkillsInfo newSkill={newSkill} showSkillInfo={showInfo} reset={reset} />}
        <div className="bio__image-wrapper">
          <div className="bio__image-container">
            <img src={bio.person.picture} alt={bio.person.name} />
          </div>
        </div>

        <h3 className="bio__username">{ bio.person.name }</h3>
        <section>
          <h4 className="bio__heading">Skills and Interests:</h4>
          {skillsArranged({
            strengths: bio.strengths,
            proficiencyLevels,
            onClick: (skill) => {
              setNewSkill(skill);
              setShowInfo(true);
            },
          })}
        </section>
      </div>
    );
  } return (
    <div className="bio__default">
      Welcome to Torre Bio!
      Kindly enter a username in the search bar above to view a user&apos;s bio, among others.
    </div>
  );
};

export default Biopage;
