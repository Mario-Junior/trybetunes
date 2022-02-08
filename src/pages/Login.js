import React, { Component } from 'react';
import './login.css';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';

const minNameSize = 3;

class Login extends Component {
  state = {
    nameInput: '',
    loading: false,
    redirect: false,
  }

  componentWillUnmount() {
    this.setState = () => {};
  }

  handleSubmitButton = async (event) => {
    event.preventDefault();
    const { nameInput } = this.state;

    this.setState({ loading: true });

    await createUser({ name: nameInput });

    this.setState({ redirect: true });
  };

  render() {
    const { nameInput, loading, redirect } = this.state;
    const enableButton = nameInput.length >= minNameSize;
    const form = (
      <section className="login">
        <img
          src="/assets/images/login-logo.png"
          alt="logomarca TrybeTunes"
          className="login-logo"
        />
        <div className="login-fields">
          <input
            type="text"
            data-testid="login-name-input"
            name="nameInput"
            value={ nameInput }
            placeholder="Nome de pessoa usuária"
            onChange={ (event) => this.setState({ nameInput: event.target.value }) }
          />
          <button
            type="button"
            data-testid="login-submit-button"
            name="submitButton"
            disabled={ !enableButton }
            onClick={ this.handleSubmitButton }
          >
            Entrar
          </button>
        </div>
      </section>
    );

    return (
      <div data-testid="page-login">
        { loading ? <Loading /> : form }
        { redirect && <Redirect to="/search" /> }
      </div>
    );
  }
}

export default Login;
