import React from 'react';
import PropTypes from 'prop-types';

const SkillsInfo = ({ newStrength }) => {
  if (newStrength.length) {
    const skill = newStrength[0];
    return (
      <div>
        { skill.name }
        { skill.proficiency.replace(/-/g, ' ') }
        { skill.recommendations }
      </div>
    );
  }
  return null;
};

SkillsInfo.propTypes = {
  newStrength: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      code: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      proficiency: PropTypes.string.isRequired,
      weight: PropTypes.number.isRequired,
      recommendations: PropTypes.number.isRequired,
      media: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      supra: PropTypes.bool.isRequired,
      created: PropTypes.string.isRequired,
      hits: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default SkillsInfo;
