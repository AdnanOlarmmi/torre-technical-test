import React from 'react';
import '../styles/Biopage.css';
import box from '../assets/images/box.svg';
import master from '../assets/images/master.svg';
import expert from '../assets/images/expert.svg';
import proficient from '../assets/images/proficient.svg';
import beginner from '../assets/images/beginner.svg';
import interested from '../assets/images/interested.svg';

const images = [{ master }, { expert }, { proficient }, { beginner }, { interested }];

const imagePath = (proficiency) => {
  if (proficiency === 'no-experience-interested') return interested;
  const image = images.find((image) => image[proficiency]);
  return image[proficiency];
};
console.log(imagePath('master'));

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
            <div className="bio__skillheader">
              <img className="bio__skillheader-img" src={imagePath(proficiency)} alt={proficiency} />
              <h4 className="bio__skillheader-text">{proficiency.replace(/-/g, ' ')}</h4>
            </div>
            <ul className="bio__skills-container">
              {skills[proficiency].map((skill) => (
                <li className="btn--white--pointer" key={skill.id}>
                  {' '}
                  {skill.name}
                  {' '}
                  {skill.weight !== 0 && (
                  <>
                    <img className="bio-skills__image" src={box} alt="null" />
                    {' '}
                    {skill.weight.toFixed}
                  </>
                  )}
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
