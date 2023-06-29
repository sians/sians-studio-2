import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import useSkills from 'hooks/useSkills';

const Skill = () => {
  const params = useParams();
  const { getSkillBySlug } = useSkills();

  const skill = useMemo(() => {
    if (params?.slug) {
      return getSkillBySlug(params.slug)
    }
  }, [params?.slug])

  return (
    <>
      {skill?.name}
    </>
  )
}

export default Skill;