import styled from 'styled-components';

export const Page = styled.div(props => {
  const { theme } = props;
  return {
    position: 'relative',
    paddingTop: theme.navHeight,
    height: `calc(100vh - ${theme.navHeight}px)`,
    maxWidth: 900,
    margin: 'auto'
  }
})