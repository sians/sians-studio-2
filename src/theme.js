import { createGlobalStyle } from 'styled-components';
import './fonts.css';

const theme = {
  margin: 16,
  fontFamily: "Spartan",
  colors: {
    black: '#32322d',
    main: '#F98012',
    bg: '#f0fbfe7a'
  }
};

export const GlobalStyles = createGlobalStyle(() => {
  return {
    'html': {
      scrollBehavior: 'smooth'
    },
    'body': {
      margin: 0,
      fontFamily: theme.fontFamily,
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
      overflow: 'hidden',
      color: theme.colors.black,
      backgroundColor: theme.colors.bg
    },
    'code': {
      fontFamily: theme.fontFamily,
    }
  }
})

export default theme;