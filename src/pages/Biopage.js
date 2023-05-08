import React from 'react';
import { useSelector } from 'react-redux';
import skillsArranged from '../helperFxns/skillsArranged';
import handleFaviconChange from '../helperFxns/handleFavicon';

const Biopage = () => {
  const proficiencyLevels = ['master', 'expert', 'proficient', 'beginner', 'no-experience-interested'];
  const state = useSelector((state) => state);
  const { bio } = state;
  if (bio?.person?.name) {
    handleFaviconChange(bio.person.picture);
    return (
      <div>
        <div className="bio__container">
          <img src={bio.person.picture} alt={bio.person.name} />
        </div>
        <h3 className="bio__username">{ bio.person.name }</h3>
        <p>Skills and Interests</p>
        <section>
          {skillsArranged(bio.strengths, proficiencyLevels)}
        </section>
      </div>
    );
  } return null;
};

export default Biopage;
