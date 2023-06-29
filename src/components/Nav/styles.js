import styled from 'styled-components';

export const Container = styled.div(props => {
  const { theme } = props;

  return {
    backgroundColor: theme.colors.black,
    color: theme.colors.white,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    left: 0,
    top: 0,
    height: theme.navHeight,
    width: '100%'
  }
})

export const Link = styled.a(props => {
  const { theme, isSelected } = props;
  const borderSize = 2;
  return {
    color: isSelected && theme.colors.main,
    margin: theme.margin,
    fontWeight: 'bold',
    borderBottom: isSelected 
      ? `${borderSize}px solid ${theme.colors.main}`
      : `${borderSize}px solid transparent`,
    '&:hover': {
      color: theme.colors.main,
      cursor: 'pointer'
    }
  }
})

export const Back = styled.div(props => {
  const { theme } = props;
  const size = 30;
  return {
    position: 'absolute',
    borderRadius: '50%',
    backgroundColor: theme.colors.main,
    color: theme.colors.black,
    height: size,
    width: size,
    top: theme.margin,
    left: theme.margin,
    '&:hover': {
      cursor: 'pointer'
    }
  }
})