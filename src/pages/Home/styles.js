import styled from 'styled-components';

export const Page = styled.div(props => {
  const { theme } = props;
  const { margin } = theme;

  return {
    margin: theme.margin * 2,
    height: `calc(100vh - ${theme.margin * 4}px)`,
    width: `calc(100vw - ${theme.margin * 4}px)`,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    'span': {
      color: theme.colors.main
    }
  }
})

export const Header = styled.div(props => {
  return {
    textAlign: 'center',
    width: '100%',
    position: 'fixed',
    top: props.theme.margin * 2
  }
})