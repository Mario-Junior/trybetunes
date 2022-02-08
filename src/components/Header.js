import React, { Component } from 'react';
import './header.css';
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
      <div className="header">
        <div className="hearder-top">
          <img src="/assets/images/logo.png" alt="logomarca TrybeTunes" />
          <div data-testid="header-user-name" className="user-name">
            { username }
            <span><Link to="/">|Logout</Link></span>
          </div>
        </div>
        <nav className="header-menu">
          <div><Link to="/search" data-testid="link-to-search">Pesquisa</Link></div>
          <div>
            <Link to="/favorites" data-testid="link-to-favorites">Favoritas</Link>
          </div>
          <div><Link to="/profile" data-testid="link-to-profile">Perfil</Link></div>
        </nav>
      </div>
    );

    return (
      <header data-testid="header-component">
        { loading ? <Loading /> : header }
      </header>
    );
  }
}

export default Header;
