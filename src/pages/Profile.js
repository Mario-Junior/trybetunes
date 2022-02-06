import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { getUser } from '../services/userAPI';

class Profile extends Component {
  state = {
    loading: true,
    user: {},
  }

  async componentDidMount() {
    const user = await getUser();
    this.setState({ loading: false, user });
    console.log(user);
  }

  render() {
    const { loading, user: { name, email, image, description } } = this.state;

    return (
      <div data-testid="page-profile">
        <Header />
        { loading ? <Loading />
          : (
            <section className="profile-section">
              <div className="image-container">
                { image.length
                  ? <img data-testid="profile-image" src={ image } alt={ name } />
                  : <img src="https://bit.ly/3B3AFwj" alt="imagem genérica para pessoa usuária" />}
              </div>
              <Link to="/profile/edit">Editar perfil</Link>
              <div className="name-container">
                <h3>Nome</h3>
                <p>{ name }</p>
              </div>
              <div className="email-container">
                <h3>E-mail</h3>
                <p>{ email }</p>
              </div>
              <div className="description-container">
                <h3>Descrição</h3>
                <p>{ description }</p>
              </div>
            </section>
          )}
      </div>
    );
  }
}

export default Profile;
