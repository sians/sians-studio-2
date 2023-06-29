import styled from 'styled-components';

export const ListContainer = styled.ul({
  padding: 0,
  margin: 0,
  listStyle: 'none',
  textAlign: 'right',
})

export const Item = styled.li(props => {
  const { theme, percent, highestPercent } = props;

  const padding = theme.margin / 1.5;
  const width = highestPercent 
    ? `${percent / highestPercent * 100}%`
    : `${percent}%`;

  return {
    position: 'relative',
    padding: padding,

    '.progress': {
      position: 'absolute',
      right: 0,
      top: 0,
      zIndex: -1,
      width: width,
      backgroundImage: 'linear-gradient(120deg,#33d0ff,#fff)',
      height: `100%`,
      opacity: 0.4,
    },

    '&:hover': {
      cursor: 'pointer',
      'h2': {
        color: theme.colors.main,        
      },
      '.progress': {
        backgroundImage: `linear-gradient(120deg,${theme.colors.main},#fff)`,
        opacity: 1,
      },      
    }
  }
})
