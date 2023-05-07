import React from 'react';
import PropTypes from 'prop-types';

const Biopage = (props) => {
  const { userBio: { person: weight } } = props;
  console.log(weight);
  return (
    <div>weight</div>
  );
};

Biopage.propTypes = {
  userBio: PropTypes.shape({
    person: PropTypes.shape({
      weight: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Biopage;
