import { useMemo } from 'react';

import { Text } from 'components';
import { ListContainer, Item } from './styles';

const SkillsList = ({ skills }) => {
  const mostProficientSkill = useMemo(() => {
    return skills.reduce((highest, skill) => {
      return (highest.proficiency > skill.proficiency)
        ? highest
        : skill;
    })
  }, [skills])

  return skills && (
    <ListContainer>
      {skills.map((skill, idx) => {
        console.log('sk', skill)
        return (
          <Item 
            key={`sk-idx-${idx}`}  
            percent={skill.proficiency}
            highestPercent={mostProficientSkill?.proficiency}
          >
            <div className='progress'/>
            <Text.Heading size={2} fontWeight={400}>
              {skill.name}
            </Text.Heading>
          </Item>
        )
      })}
    </ListContainer>    
  )
}

export default SkillsList;