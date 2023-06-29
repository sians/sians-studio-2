import styled from 'styled-components';

export const Img = styled.img(props => {
  const { maxHeight, maxWidth } = props;
  return {
    maxHeight: maxHeight,
    maxWidth: maxWidth
  }
})