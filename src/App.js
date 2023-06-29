import { ThemeProvider } from 'styled-components';

import Router from './router';
import theme from 'theme';

import { Copyright } from 'components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router />
        <Copyright />        
      </div>
    </ThemeProvider>
  );
}

export default App;
