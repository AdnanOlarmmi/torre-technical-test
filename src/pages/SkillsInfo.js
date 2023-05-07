import React from 'react';
import PropTypes from 'prop-types';
import '../styles/SkillsInfo.css';

const SkillsInfo = ({ newStrength }) => {
  if (newStrength.length) {
    const skill = newStrength[0];
    return (
      <div className="skillInfo">
        <div className="header">
          { skill.name }
        </div>
        <div>
          Proficiency:
          { skill.proficiency.replace(/-/g, ' ') }
          <br />
          Recommendations:
          { skill.recommendations }
        </div>

      </div>
    );
  }
  return null;
};

SkillsInfo.propTypes = {
  newStrength: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      proficiency: PropTypes.string.isRequired,
      weight: PropTypes.number.isRequired,
      recommendations: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default SkillsInfo;
