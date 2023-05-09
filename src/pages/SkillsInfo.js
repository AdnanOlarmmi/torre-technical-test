import React from 'react';
import PropTypes from 'prop-types';
import { imagePath } from '../helperFxns/skillsArranged';
import '../styles/SkillsInfo.css';
import '../styles/Header.css';

const SkillsInfo = ({ newSkill }) => {
  if (newSkill?.name) {
    return (
      <div
        className="skills__info-container"
      >
        <div className="skills__info-heading">
          <span className="material-symbols-outlined">
            close
          </span>
          <h3>
            {newSkill.name}
          </h3>
        </div>
        <div className="skills__info-prof-cont">

          <div className="skills__info-proficiency">
            <p className="skills__info-prof-title">Proficiency:</p>
            <img src={imagePath(newSkill.proficiency)} alt={newSkill.name} />
            <p
              className="skills__info-prof-level"
            >
              {newSkill.proficiency}
            </p>
          </div>
        </div>
        <p className="skills__info-weight">
          Weight:
          {' '}
          <span>
            {newSkill.weight}
          </span>
        </p>
        <p className="skills__info-recommendations">
          Recommendations:
          {' '}
          <span>{newSkill.recommendations}</span>
        </p>
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
