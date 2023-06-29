import styled from 'styled-components';

const Row = styled.div(props => {
  const { padding, theme, align, justify, height, overflowY } = props;
  const rowPadding = padding || 0;
  return {
    display: 'flex',
    flexDirection: 'row',
    padding: rowPadding,
    width: `calc(100% - ${rowPadding * 2}px)`,
    alignItems: align,
    justifyContent: justify,
    height: height,
    overflowY: overflowY,
    flexWrap: 'wrap'
  }
})

const Col = styled.div(props => {
  const { size, padding, theme, justify, align, overflow, maxHeight } = props;
  const colPadding = padding || 0;
  const widthPercentage = size / 12 * 100;

  return {
    display: 'flex',
    flexDirection: 'column',
    padding: colPadding,
    width: `calc(${widthPercentage}% - ${colPadding * 2}px)`,
    flexWrap: 'wrap',
    justifyContent: justify,
    alignItems: align,
    transition: 'width 0.5s',
    overflow: overflow && overflow,
    maxHeight: maxHeight && maxHeight
  }
})

export default {
  Row,
  Col
}