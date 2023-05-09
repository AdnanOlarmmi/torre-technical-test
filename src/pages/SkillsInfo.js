import React, { useContext } from 'react';
import StrengthContext from '../helperFxns/StrengthContext';
import '../styles/SkillsInfo.css';

const SkillsInfo = () => {
  const { selectedStrength } = useContext(StrengthContext);
  console.log(selectedStrength);
  return (<div>as</div>);
};

export default SkillsInfo;
