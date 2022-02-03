import React, { Component } from 'react';
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
        <div>
          <p>trybeTunes</p>
          <p data-testid="header-user-name">{ username}</p>
        </div>
        <nav>
          <li>Pesquisa</li>
          <li>Favoritas</li>
          <li>Perfil</li>
        </nav>
      </>
    );

    return (
      <header data-testid="header-component">
        { loading ? <Loading /> : header }
      </header>
    );
  }
}

export default Header;
