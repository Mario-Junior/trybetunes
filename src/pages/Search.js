import React, { Component } from 'react';
import Header from '../components/Header';

const minNameSize = 2;

class Search extends Component {
  state = {
    searchInput: '',
  }

  handleSearchButton = () => {}

  render() {
    const { searchInput } = this.state;
    const enableButton = searchInput.length >= minNameSize;
    const form = (
      <>
        <input
          type="text"
          data-testid="search-artist-input"
          name="searchInput"
          value={ searchInput }
          placeholder="Nome do artista ou banda"
          onChange={ (event) => this.setState({ searchInput: event.target.value }) }
        />
        <button
          type="button"
          data-testid="search-artist-button"
          name="searchButton"
          disabled={ !enableButton }
          onClick={ this.handleSearchButton }
        >
          Pesquisar
        </button>
      </>
    );

    return (
      <div data-testid="page-search">
        <Header />
        { form }
      </div>
    );
  }
}

export default Search;
