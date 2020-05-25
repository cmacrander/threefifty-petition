import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';

import AppContainer from 'components/AppContainer';
import DevNavigation from 'scenes/DevNavigation';
import Home from 'scenes/Home';
import ImportSheets from 'scenes/ImportSheets';
import { theme } from 'theme';

const App: React.FC = () => (
  <AppContainer>
    <ThemeProvider theme={theme}>
      <Router>
        <DevNavigation />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/import-sheets">
            <ImportSheets />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  </AppContainer>
);
export default App;
