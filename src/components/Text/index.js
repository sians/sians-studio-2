import styled from 'styled-components';

const HEADING_SIZES = {
  1: '4rem',
  2: '3rem',
  3: '2rem',
  4: '2.5rem'
}

const Heading = styled.h2(props => {
  const { theme, colorName, size } = props;

  return {
    fontSize: HEADING_SIZES[size] || '2rem',
    padding: 0,
    margin: 0,
    color: theme.colors?.[colorName] || theme.colors.black,

    '&:hover': {
      cursor: 'default'
    }
  }
})

export default {
  Heading
}