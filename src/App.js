import React from 'react';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';

class App extends React.Component {
  render() {
    return (
      <>
        <p>TrybeTunes</p>
        <Login />
        <Search />
        <Album />
        <Favorites />
      </>
    );
  }
}

export default App;
