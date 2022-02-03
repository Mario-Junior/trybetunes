import React, { Component } from 'react';
import './login.css';

class Login extends Component {
  render() {
    return (
      <div data-testid="page-login">
        <input
          type="text"
          data-testid="login-name-input"
          name="name-input"
          placeholder="Nome de usuário"
        />
        <button
          type="button"
          data-testid="login-submit-button"
          name="submit-button"
        >
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
