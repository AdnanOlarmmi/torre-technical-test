import React from 'react';
import { useSelector } from 'react-redux';
import skillsArranged from '../helperFxns/skillsArranged';

const Biopage = () => {
  const proficiencyLevels = ['master', 'expert', 'proficient', 'beginner', 'no-experience-interested'];
  const state = useSelector((state) => state);
  const { bio } = state;
  console.log(bio);
  if (bio?.person?.name) {
    const skills = skillsArranged(bio.strengths, proficiencyLevels);
    console.log(skills);
    return (<div>{ bio.person.name }</div>);
  } return null;
};

export default Biopage;
