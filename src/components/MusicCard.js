import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MusicCard extends Component {
  render() {
    const { image, trackName, previewUrl, trackId, onChange } = this.props;

    return (
      <div className="music-card">
        { image && <img src={ image } alt={ `Album da música ${trackName}` } /> }
        <h5>{ trackName }</h5>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
        </audio>
        <label htmlFor={ trackId }>
          Favorita
          <input
            type="checkbox"
            data-testid={ `checkbox-music-${trackId}` }
            trackId={ trackId }
            trackName={ trackName }
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

MusicCard.propTypes = {
  trackname: PropTypes.string,
  previewUrl: PropTypes.string,
  image: PropTypes.string,
}.isRequired;

export default MusicCard;
