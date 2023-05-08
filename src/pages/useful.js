// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import '../styles/Biopage.css';

// const Biopage = ({ strengths, person }) => {
//   const [skillName, setSkillName] = useState('');
//   const newStrength = strengths.filter((strength) => strength.name === skillName);
//   const handleFaviconChange = (newPath) => {
//     const favicon = document.querySelector('link[rel="icon"]');
//     favicon.href = newPath;
//   };
//   handleFaviconChange(person.picture);
//   const { name, picture } = person;
//  const proficiencyLevels = ['master', 'expert', 'prnt', 'beginner', 'no-experience-interested'];
//   const skillbyProficiency = (proficiencylevel) => {
//     const skills = strengths.filter((strength) => strength.proficiency === proficiencylevel);
//     if (skills.length === 0) return null;
//     return (
//       <div className="skillsWrapper">
//         <ul className="skillsContainer">
//           <h4 className="skillheader">{proficiencylevel.replace(/-/g, ' ')}</h4>
//           {skills.map((skill) => (
//             <li key={skill.id}>
//               <button
//                 type="button"
//                 onClick={() => {
//                   setSkillName(skill.name);
//                 }}
//               >
//                 {skill.name}
//                 {' '}
//                 {skill.weight || ''}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>

//     );
//   };
//   return (
//     <div className="bioContainer">
//       <div className="image-container">
//         <img src={picture} alt={name} />
//       </div>
//       <h3 className="userName">{name}</h3>
//       <p>Skills and interests:</p>
//       <section>
//         {proficiencyLevels.map((proficiencyLevels) => skillbyProficiency(proficiencyLevels))}
//       </section>
//       <SkillsInfo newStrength={newStrength} />
//     </div>
//   );
// };

// export default Biopage;