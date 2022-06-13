import React, { Component } from 'react';
import * as C from './styles';
// import './search.css';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Loading from '../../components/Loading';
import searchAlbumsAPI from '../../services/searchAlbumsAPI';

const minNameSize = 2;

class Search extends Component {
  state = {
    searchInput: '',
    loading: false,
    albumsArray: '',
    inputedValue: '',
  }

  handleSearchButton = async (event) => {
    event.preventDefault();
    const { searchInput } = this.state;

    this.setState({ searchInput: '', loading: true });

    const returnedAlbums = await searchAlbumsAPI(searchInput);

    this.setState({
      albumsArray: returnedAlbums,
      loading: false,
      inputedValue: searchInput,
    });
  }

  showAlbums = () => {
    const { inputedValue, albumsArray } = this.state;
    const text = `Resultado de álbuns de: ${inputedValue}`;
    return (
      <>
        <C.Content>
          <h2>{ text }</h2>
        </C.Content>
        <C.CardList>
          {albumsArray.map((album) => (
            <Link
              data-testid={ `link-to-album-${album.collectionId}` }
              to={ `album/${album.collectionId}` }
              key={ album.collectionId }
            >
              <C.CardContainer>
                <C.Image
                  src={ album.artworkUrl100 }
                  alt={ `Imagem do ${album.collectionName} de ${album.artistName}` }
                  className="album-img"
                />
                <p className="title">{ album.collectionName }</p>
                <p className="subtitle">{ album.artistName }</p>
              </C.CardContainer>
            </Link>
          ))}
        </C.CardList>
      </>
    );
  }

  render() {
    const { searchInput, loading, albumsArray, inputedValue } = this.state;
    const noAlbumFound = inputedValue.length > 0 && albumsArray.length === 0;
    const enableButton = searchInput.length >= minNameSize;
    const form = (
      <C.Form>
        <input
          type="text"
          data-testid="search-artist-input"
          name="searchInput"
          value={ searchInput }
          placeholder="Nome de artista ou banda"
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
      </C.Form>
    );

    return (
      <>
      <Header />
      <C.Container>
        { loading ? <Loading /> : form }
          { noAlbumFound && <h1>Nenhum álbum foi encontrado</h1> }
          { albumsArray.length > 0 && this.showAlbums() }
      </C.Container>
      </>
    );
  }
}

export default Search;
