import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class Header extends Component {
  state = {
    loading: true,
    username: '',
  }

  async componentDidMount() {
    const { name } = await getUser();
    this.setState({ loading: false, username: name });
  }

  render() {
    const { loading, username } = this.state;
    const header = (
      <>
        <div className="hearder-top">
          <p>trybeTunes</p>
          <p data-testid="header-user-name">{ username }</p>
          <span><Link to="/">Logout</Link></span>
        </div>
        <nav className="header-menu">
          <p><Link to="/search" data-testid="link-to-search">Pesquisa</Link></p>
          <p><Link to="/favorites" data-testid="link-to-favorites">Favoritas</Link></p>
          <p><Link to="/profile" data-testid="link-to-profile">Perfil</Link></p>
        </nav>
      </>
    );

    return (
      <header data-testid="header-component" className="header">
        { loading ? <Loading /> : header }
      </header>
    );
  }
}

export default Header;
