import React, { Component } from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { getUser } from '../services/userAPI';

class ProfileEdit extends Component {
  state = {
    loading: true,
    description: '',
    email: '',
    image: '',
    username: '',
    isSaveButtonDisabled: true,
  }

  async componentDidMount() {
    const user = await getUser();
    const { description, email, image, name } = user;

    this.setState({
      loading: false,
      description,
      email,
      image,
      username: name,
    });
  }

  handleChange = ({ target }) => {
    const { id, value } = target;
    this.setState({
      [id]: value,
    });
  }

  handleFormToRender = () => {
    const {
      description,
      email,
      image,
      username,
      isSaveButtonDisabled,
    } = this.state;

    return (
      <form className="profile-form">
        <label htmlFor="image">
          <div className="image-container">
            { image.length
              ? <img data-testid="profile-image" src={ image } alt={ username } />
              : <img src="https://bit.ly/3B3AFwj" alt="imagem de pessoa usuária" /> }
          </div>
          <input
            value={ image }
            id="image"
            onChange={ this.handleChange }
            data-testid="edit-input-image"
            placeholder="Insira um link de imagem"
            required
          />
        </label>
        <p>Fique a vontade para usar seu nome social</p>
        <label htmlFor="username">
          Nome
          <input
            value={ username }
            id="username"
            onChange={ this.handleChange }
            data-testid="edit-input-name"
            placeholder="Digite seu nome"
            required
          />
        </label>
        <p>Escolha um e-mail que consulte diariamente</p>
        <label htmlFor="email">
          Email
          <input
            type="email"
            value={ email }
            id="email"
            onChange={ this.handleChange }
            data-testid="edit-input-email"
            placeholder="usuario@usuario.com.br"
            required
          />
        </label>
        <label htmlFor="description">
          Descrição
          <textarea
            value={ description }
            id="description"
            onChange={ this.handleChange }
            data-testid="edit-input-description"
            placeholder="Sobre mim"
            required
          />
        </label>
        <button
          type="submit"
          data-testid="edit-button-save"
          disabled={ isSaveButtonDisabled }
        >
          Salvar
        </button>
      </form>
    );
  }

  render() {
    const { loading } = this.state;
    return (
      <div data-testid="page-profile-edit">
        <Header />
        { loading ? <Loading /> : this.handleFormToRender() }
      </div>
    );
  }
}

export default ProfileEdit;
