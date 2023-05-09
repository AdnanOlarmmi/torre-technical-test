import React from 'react';
import PropTypes from 'prop-types';
import { imagePath } from '../helperFxns/skillsArranged';
import '../styles/SkillsInfo.css';

const SkillsInfo = ({ newSkill }) => {
  if (newSkill?.name) {
    return (
      <div
        className="skills__info-container"
      >
        <h3 className="skills__info-heading">{newSkill.name}</h3>
        <p className="skills__info-proficiency">
          {newSkill.proficiency}
          :
        </p>
        <img src={imagePath(newSkill.proficiency)} alt={newSkill.name} />
        <p className="skills__info-weight">{newSkill.weight}</p>
        <p className="skills__info-recommendations">{newSkill.recommendations}</p>
      </div>
    );
  } return <p />;
};

SkillsInfo.propTypes = {
  newSkill: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    proficiency: PropTypes.string.isRequired,
    weight: PropTypes.number.isRequired,
    recommendations: PropTypes.number.isRequired,
  }).isRequired,
};

export default SkillsInfo;
