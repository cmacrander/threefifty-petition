import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from 'theme';
import DevNavigation from 'scenes/DevNavigation';
import AppContainer from 'components/AppContainer';
import Home from 'scenes/Home';

const App: React.FC = () => (
  <AppContainer>
    <ThemeProvider theme={theme}>
      <Router>
        <DevNavigation />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  </AppContainer>
);
export default App;
