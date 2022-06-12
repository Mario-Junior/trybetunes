import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Login from './pages/Login/Login';
import Search from '../src/pages/Search/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';
import GlobalStyles from './assets/styles/global';

import { defaultTheme } from './assets/styles/themes/default';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Login } />
            <Route path="/search" component={ Search } />
            <Route path="/album/:id" component={ Album } />
            <Route path="/favorites" component={ Favorites } />
            <Route exact path="/profile/edit" component={ ProfileEdit } />
            <Route exact path="/profile" component={ Profile } />
            <Route path="*" component={ NotFound } />
          </Switch>
        </BrowserRouter>
        <GlobalStyles />
      </ThemeProvider>
    );
  }
}

export default App;
