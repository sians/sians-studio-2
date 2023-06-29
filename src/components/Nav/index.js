import { useNavigate } from 'react-router-dom';

import useSkills from 'hooks/useSkills';

import { Container, Link, Back } from './styles';

const Nav = ({ skillSlug }) => {
  const navigate = useNavigate();
  const { skills } = useSkills();

  return (
    <Container>
      <Back onClick={() => navigate(`/`)}/>
      {skills && skills.map((skill, idx) => {
        return skill.showInNav && (
          <Link 
            isSelected={skillSlug === skill.slug}
            onClick={() => navigate(`/skills/${skill.slug}`)}
          >
            {skill.name}
          </Link>
        )
      })}
    </Container>
  )
}

export default Nav;