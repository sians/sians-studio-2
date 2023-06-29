import styled from 'styled-components';

export const Page = styled.div(props => {
  const { theme } = props;
  return {
    position: 'relative',
    padding: `0px ${theme.margin}px`,
    paddingTop: theme.navHeight,
    height: `calc(100vh - ${theme.navHeight}px)`,
    maxWidth: theme.maxPageWidth - theme.margin*2,
    margin: 'auto',
  }
})

export const Header = styled.div(props => {
  const { theme } = props;
  const padding = theme.margin * 4;

  return {
    paddingTop: padding * 1.5,
    paddingBottom: padding,
    textAlign: 'center'
  }
})

export const Paragraph = styled.div(props => {
  const { theme } = props;
  const size = 10;
  return {
    display: 'flex',
    alignItems: 'center',
    '.bullet': {
      backgroundColor: theme.colors.main,
      borderRadius: '50%',
      height: size,
      width: size,
      marginRight: theme.margin  
    }
  }
})