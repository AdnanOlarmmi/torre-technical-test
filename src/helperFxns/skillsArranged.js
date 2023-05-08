const skillsArranged = (strengths, proficiencyLevels) => {
  const skills = {};
  proficiencyLevels.forEach((proficiency) => {
    skills[proficiency] = strengths.filter((strength) => strength.proficiency === proficiency);
  });
  return skills;
};

export default skillsArranged;
