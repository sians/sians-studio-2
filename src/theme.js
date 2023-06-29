import { createGlobalStyle } from 'styled-components';
import './fonts.css';

const theme = {
  margin: 16,
  fontFamily: "Spartan",
  colors: {
    black: '#32322d',
    main: '#F98012'
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
    },
    'code': {
      fontFamily: theme.fontFamily,
    }
  }
})

export default theme;