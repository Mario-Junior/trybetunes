import React from 'react';
import Login from './pages/Login';
import Search from './pages/Search';

class App extends React.Component {
  render() {
    return (
      <>
        <p>TrybeTunes</p>
        <Login />
        <Search />
      </>
    );
  }
}

export default App;
