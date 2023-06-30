import styled from 'styled-components';

const HEADER_HEIGHT = 80;

export const Page = styled.div(props => {
  const { theme } = props;

  return {
    margin: theme.margin * 2,
    paddingTop: HEADER_HEIGHT,
    height: `calc(100vh - ${theme.margin * 4}px - ${HEADER_HEIGHT}px)`,
    width: `calc(100vw - ${theme.margin * 4}px)`,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    'a': {
      color: theme.colors.main,
      textDecoration: 'none',
      background: ` 
        linear-gradient(to right, ${theme.colors.white}, ${theme.colors.white}),
        linear-gradient(to right, ${theme.colors.main}, ${theme.colors.main})`,
      backgroundSize: '100% 0.15em, 0 0.15em',
      backgroundPosition: '100% 100%, 0 100%',
      backgroundRepeat: 'no-repeat',
      transition: 'background-size 400ms',
  
      '&:hover, &:focus': {
        cursor: 'pointer',
        backgroundSize: '0 0.15em, 100% 0.15em'
      }
    },

    'span': {
      opacity: 0.1
    }
  }
})

export const Header = styled.div(props => {
  const { theme } = props;
  return {
    width: '100%',
    position: 'fixed',
    top: props.theme.margin * 2,
    height: HEADER_HEIGHT,

    'h2': {
      marginBottom: theme.margin /2,
      width: `calc(100% - ${theme.margin * 4}px)`
    },  

  }
})

export const ImgContainer = styled.div(props => {
  return {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    height: `calc(100% - ${props.theme.margin * 4}px - ${HEADER_HEIGHT}px)`,
  }
})