import styled from 'styled-components';

export const Page = styled.div(props => {
  const { theme } = props;

  return {
    height: `100vh`,
    width: `100vw`,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',

    'span': {
      color: theme.colors.main
    }
  }
})