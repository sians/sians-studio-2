import { useNavigate } from 'react-router-dom';

import useSkills from 'hooks/useSkills';

import { Text } from 'components';
import { ListContainer, Item } from './styles';

const SkillsList = ({ skills }) => {
  const navigate = useNavigate();
  const { mostProficientSkill } = useSkills();

  return skills && (
    <ListContainer>
      {skills.map((skill, idx) => {
        return (
          <Item 
            key={`sk-idx-${idx}`}  
            percent={skill.proficiency}
            highestPercent={mostProficientSkill?.proficiency}
            onClick={() => navigate(`/skills/${skill.slug}`)}
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