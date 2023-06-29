import devImg from 'assets/donate-dev.png';
import skills from 'data/skills';

import { Text, Layout, Image, SkillsList } from 'components';
import { Page, Header, ImgContainer } from './styles';

const IMG_TEXT = 'laptop dreams qubits; siân dreams of sweet caffeine; flynn counts sheep in his sleep';

const Home = () => {
  return (
    <Page>
      <Header>
        <Text.Heading 
          size={1}
          textAlign='center'
        >
          my name is <span>siân</span>.
        </Text.Heading>
        <Text.Heading>
        i make stuff with:
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