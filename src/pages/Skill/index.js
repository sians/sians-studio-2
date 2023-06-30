import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import useSkills from 'hooks/useSkills';

import { Nav, Text, Layout } from 'components';
import { Page, Header, Paragraph } from './styles';

const Skill = () => {
  const params = useParams();
  const { getSkillBySlug } = useSkills();

  const skill = useMemo(() => {
    if (params?.slug) {
      return getSkillBySlug(params.slug)
    }
  }, [params?.slug, getSkillBySlug])

  return (
    <Page>
      <Nav skillSlug={skill?.slug}/>

      <Header>
        <Text.Heading size={2}>
          {skill?.title || skill?.name}
        </Text.Heading>
      </Header>

      {skill && skill.blurb &&
        <Text.Body className='blurb'>
          {skill.blurb}
        </Text.Body>
      }

      {skill && 
      skill.text?.length > 0 && 
      skill.text.map((p, idx) => {
        return (
          <Paragraph>
            <Layout.Col size={0.5}>
              <div className='bullet' /> 
            </Layout.Col>

            <Layout.Col size={11.5}>
              <Text.Body key={`p-idx-${idx}`}>
                {p}
              </Text.Body>
            </Layout.Col>
          </Paragraph>
        )
      })}
    </Page>
  )
}

export default Skill;