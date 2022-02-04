import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';

class Album extends Component {
  state = {}

  handleMusics = async () => {
    const { match: { params: { id } } } = this.props;

    const musics = await getMusics(id);

    console.log(musics);
  }

  render() {
    return (
      <div data-testid="page-album">
        <Header />
        <button type="button" onClick={ this.handleMusics }>Musicas</button>
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.objectOf(PropTypes.string),
    path: PropTypes.string,
    url: PropTypes.string,
  }),
}.isRequired;

export default Album;
