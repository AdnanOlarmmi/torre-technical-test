/* eslint-disable */
import React, { useEffect, useRef, useState } from 'react';
import '../styles/Biopage.css';
import box from '../assets/images/box.svg';
import master from '../assets/images/master.svg';
import expert from '../assets/images/expert.svg';
import proficient from '../assets/images/proficient.svg';
import beginner from '../assets/images/beginner.svg';
import interested from '../assets/images/interested.svg';

export const imagePath = (proficiency) => {
    const images = [{ master }, { expert }, { proficient }, { beginner }, { interested }];
  if (proficiency === 'no-experience-interested') return interested;
  const image = images.find((image) => image[proficiency]);
  return image[proficiency];
};

const skillHeader = (proficiency) => {
  if (proficiency === 'no-experience-interested') return 'No experience, but interested';
  return proficiency.replace(/-/g, ' ');
};

// const defaultSkill = {
//     "id": "NPmYYGmM",
//     "code": 6080236,
//     "name": "Code review",
//     "proficiency": "master",
//     "weight": 0,
//     "recommendations": 3,
//     "media": [],
//     "supra": false,
//     "created": "2023-04-30T16:39:13",
//     "hits": 170
// }

const skillsArranged = (props) => {
    const { strengths, proficiencyLevels, onClick } = props;
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
              <h4 className="bio__skillheader-text">{skillHeader(proficiency)}</h4>
            </div>
            <ul className="bio__skills-container">
              {skills[proficiency].map((skill) => (
                <li
                  className="btn--white--pointer"
                  key={skill.id}
                  onClick={() => onClick(skill
                    )}
                >
                  {' '}
                  <p>
                    {skill.name}
                  </p>
                  {' '}
                  {skill.weight !== 0 && (
                    <>
                      <img className="bio-skills__image" src={box} alt="null" />
                      {' '}
                      {skill.weight.toFixed(1)}
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
