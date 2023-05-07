import React from 'react';
import PropTypes from 'prop-types';

const Biopage = ({ strengths, person }) => {
  const { name, picture } = person;
  console.log(name, picture);
  console.log(strengths);
  const ll = 'll';
  console.log(ll);
  const proficiencyLevels = ['master', 'expert', 'proficient', 'beginner', 'no-experience-interested'];
  const skillbyProficiency = (proficiencylevel) => {
    const skills = strengths.filter((strength) => strength.proficiency === proficiencylevel);
    if (skills.length === 0) return null;
    return (
      <ul>
        <h2>{proficiencylevel.replace(/-/g, ' ')}</h2>
        {skills.map((skill) => (
          <li key={skill.id}>
            {skill.name}
            {' '}
            {skill.weight || ''}
          </li>
        ))}
      </ul>
    );
  };

  console.log(skillbyProficiency('expert'));
  return (
    <div>
      <h1>{name}</h1>
      <img src={picture} alt={name} />
      <section>
        {proficiencyLevels.map((proficiencyLevels) => skillbyProficiency(proficiencyLevels))}
      </section>
    </div>
  );
};

Biopage.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }),
  strengths: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ])).isRequired,
};

export default Biopage;
