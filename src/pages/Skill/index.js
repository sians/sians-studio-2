import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import useSkills from 'hooks/useSkills';

import { Nav, Text } from 'components';
import { Page } from './styles';

const Skill = () => {
  const params = useParams();
  const { getSkillBySlug } = useSkills();

  const skill = useMemo(() => {
    if (params?.slug) {
      return getSkillBySlug(params.slug)
    }
  }, [params?.slug])

  return (
    <Page>
      <Nav skillSlug={skill?.slug}/>

      <Text.Heading>
        {skill?.name}
      </Text.Heading>

      
    </Page>
  )
}

export default Skill;