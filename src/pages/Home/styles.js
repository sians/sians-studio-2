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
    top: props.theme.margin * 2,
    height: HEADER_HEIGHT
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