import { useMemo } from 'react';
import skills from 'data/skills';

const useSkills = () => {
  // returns Skill with highest proficiency
  const mostProficientSkill = useMemo(() => {
    return skills.reduce((highest, skill) => {
      return (highest.proficiency > skill.proficiency)
        ? highest
        : skill;
    })
  }, [skills])

  // returns Skill by slug
  const getSkillBySlug = (slug) => {
    return skills.find(skill => skill.slug === slug);
  }

  return {
    skills,
    mostProficientSkill,
    getSkillBySlug
  }
}

export default useSkills;