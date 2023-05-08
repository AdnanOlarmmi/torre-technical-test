import React from 'react';

const skillsArranged = (strengths, proficiencyLevels) => {
  const skills = {};
  proficiencyLevels.forEach((proficiency) => {
    skills[proficiency] = strengths.filter((strength) => strength.proficiency === proficiency);
  });
  return (
    <div>
      {Object.keys(skills).map((proficiency) => {
        if (skills[proficiency].length === 0) return null;
        return (
          <div key={skills.id}>
            <h4>{proficiency.replace(/-/g, ' ')}</h4>
            <ul>
              {skills[proficiency].map((skill) => (
                <li key={skill.id}>
                  {' '}
                  {skill.name}
                  {skill.weight || ''}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default skillsArranged;
