import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MusicCard extends Component {
  render() {
    const { image, name, preview, id, onChange, checked } = this.props;

    return (
      <div className="music-card">
        { image && <img src={ image } alt={ `Album da música ${name}` } /> }
        <h5>{ name }</h5>
        <audio data-testid="audio-component" src={ preview } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
        </audio>
        <label htmlFor={ id }>
          Favorita
          <input
            type="checkbox"
            data-testid={ `checkbox-music-${id}` }
            id={ id }
            name={ name }
            onChange={ onChange }
            checked={ checked }
          />
        </label>
      </div>
    );
  }
}

MusicCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  preview: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
}.isRequired;

export default MusicCard;
