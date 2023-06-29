import styled from 'styled-components';

const HEADING_SIZES = {
  1: '4rem',
  2: '3rem',
  3: '2rem',
  4: '2.5rem'
}

const Heading = styled.h2(props => {
  const { theme, colorName, size, fontWeight } = props;

  return {
    fontSize: HEADING_SIZES[size] || '2rem',
    fontWeight: fontWeight || 'bold',
    padding: 0,
    margin: 0,
    color: theme.colors?.[colorName] || theme.colors.black,
  }
})

const Body = styled.p(props => {
  const { theme } = props;
  return {
    fontSize: '1.2rem',
    margin: `${theme.margin / 2}px 0px`,
    padding: 0
  }
})

export default {
  Heading,
  Body
}