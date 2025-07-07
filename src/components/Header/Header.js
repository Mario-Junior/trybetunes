import React, { Component } from 'react';
import * as C from './styles';
// import './header.css';
import { headerLogo } from '../../assets/images';
import { Link } from 'react-router-dom';
import { getUser } from '../../services/userAPI';
import Loading from '../Loading';

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
      <C.Container>
        <nav className="header-menu">
          <Link to="/search" data-testid="link-to-search">Pesquisa</Link>
          <Link to="/favorites" data-testid="link-to-favorites">Favoritas</Link>
          <Link to="/profile" data-testid="link-to-profile">Perfil</Link>
        </nav>
        <C.User style={{ width: '100%' }}>
          <div data-testid="header-user-name" className="user-name">
            { username }
            <span><Link to="/"> | Logout</Link></span>
          </div>
          <img src={headerLogo} alt="logomarca tunes.io" style={{ width: '80%', height: 'auto' }} />
        </C.User>
      </C.Container>
    );

    return (
      <C.Container>
        <nav className="header-menu">
          <Link to="/search" data-testid="link-to-search">Pesquisa</Link>
          <Link to="/favorites" data-testid="link-to-favorites">Favoritas</Link>
          <Link to="/profile" data-testid="link-to-profile">Perfil</Link>
        </nav>
        <C.User>
          <div data-testid="header-user-name" className="user-name">
            { loading ? <span>Loading...</span> : username }
            <span><Link to="/"> | Logout</Link></span>
          </div>
          <img src={headerLogo} alt="logomarca tunes.io" />
        </C.User>
      </C.Container>
    );
  }
}

export default Header;
