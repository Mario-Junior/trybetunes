import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import Loading from '../components/Loading';
import MusicCard from '../components/MusicCard';
import { addSong } from '../services/favoriteSongsAPI';

class Album extends Component {
  state = {
    musicsArray: '',
    loading: false,
    favoriteSongs: [],
  }

  componentDidMount() {
    this.handleMusics();
  }

  handleMusics = async () => {
    const { match: { params: { id } } } = this.props;

    this.setState({ loading: true });

    const musics = await getMusics(id);

    this.setState({ musicsArray: musics, loading: false });
  }

  handleCheckChange = async ({ target }) => {
    const { name, checked } = target;
    const { musicsArray, favoriteSongs } = this.state;
    const checkedTrack = musicsArray.find(({ trackName }) => trackName === name);

    this.setState({ loading: true });

    if (checked) {
      await addSong(checkedTrack);
    }
    this.setState({ loading: false, favoriteSongs: [...favoriteSongs, checkedTrack] });
  }

  showMusics = () => {
    const { musicsArray, loading, favoriteSongs } = this.state;
    const { artistName, artworkUrl100, collectionName } = musicsArray[0];

    return (
      loading
        ? <Loading />
        : (
          <section className="musics-section">
            <div className="album-data">
              <img
                src={ artworkUrl100 }
                alt={ `Capa do álbum ${collectionName} de ${artistName}` }
              />
              <p data-testid="album-name">{ collectionName }</p>
              <p data-testid="artist-name">{ artistName }</p>
            </div>
            <div className="musics-data">
              { musicsArray.slice(1).map((music) => {
                const { previewUrl, trackId, trackName } = music;
                return (
                  <MusicCard
                    key={ trackId }
                    name={ trackName }
                    preview={ previewUrl }
                    id={ trackId }
                    onChange={ this.handleCheckChange }
                    checked={ favoriteSongs
                      .some((musicId) => musicId.trackId === trackId) }
                  />);
              })}
            </div>
          </section>
        ));
  }

  render() {
    const { musicsArray } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        { musicsArray.length === 0 ? <Loading /> : this.showMusics() }
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
