import { Page } from './styles';

import devImg from 'assets/donate-dev.png';

import { Text, Layout, Image } from 'components';
import { Header } from './styles';

const Home = () => {
  return (
    <Page>
      <Header>
        <Text.Heading 
          size={1}
          textAlign='center'
        >
          hi, i'm <span>siân</span>.
        </Text.Heading>
      </Header>

      <Layout.Row>
        <Layout.Col size={6}>
          <Image src={devImg} maxWidth={'100%'}/>
        </Layout.Col>

        <Layout.Col size={6}>

        </Layout.Col>
      </Layout.Row>

    </Page>
  )
}

export default Home;