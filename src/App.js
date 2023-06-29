import { ThemeProvider } from 'styled-components';

import Router from './router';
import theme from 'theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router />
      </div>
    </ThemeProvider>
  );
}

export default App;
