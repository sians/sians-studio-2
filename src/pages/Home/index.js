import { useNavigate } from 'react-router-dom';

import devImg from 'assets/donate-dev.png';
import skills from 'data/skills';

import { Text, Layout, Image, SkillsList } from 'components';
import { Page, Header, ImgContainer } from './styles';

const IMG_TEXT = 'laptop dreams qubits; siân dreams of sweet caffeine; flynn counts sheep in his sleep';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Page>
      <Header>
        <Text.Heading 
          size={1}
          textAlign='center'
        >
          hi my name is <a target='_blank' href={`https://github.com/sians`}>siân</a>. 
        </Text.Heading>
        <Text.Heading  size={3} textAlign='center'>
          sometimes i code. <span>occasionally i sleep.</span>
        </Text.Heading>
      </Header>

      <Layout.Row>
        <ImgContainer>
          <Image 
            src={devImg} 
            maxWidth={'40%'}
            alt={IMG_TEXT}
            title={IMG_TEXT}
          />
        </ImgContainer>

        <Layout.Col size={3}/>
        <Layout.Col size={9}>
          <SkillsList skills={skills}/>
        </Layout.Col>
      </Layout.Row>
    </Page>
  )
}

export default Home;