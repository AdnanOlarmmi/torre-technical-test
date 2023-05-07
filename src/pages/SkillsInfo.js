import React from 'react';
import PropTypes from 'prop-types';

const SkillsInfo = ({ skill }) => {
  console.log('skilssinfo');
  return (
    <div>SkillsInfo</div>
  );
};

SkillsInfo.propTypes = {
  strengths: PropTypes.arrayOf(
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
}

export default SkillsInfo;
