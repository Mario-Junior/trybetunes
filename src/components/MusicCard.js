import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MusicCard extends Component {
  render() {
    const { trackname, previewUrl, image } = this.props;

    return (
      <div className="music-card">
        { image && <img src={ image } alt={ `Album da música ${trackname}` } /> }
        <h5>{ trackname }</h5>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
        </audio>
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
