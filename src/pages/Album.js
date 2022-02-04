import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import Loading from '../components/Loading';
import MusicCard from '../components/MusicCard';

class Album extends Component {
  state = {
    musicsArray: '',
    loading: false,
  }

  componentDidMount() {
    this.handleMusics();
  }

  handleMusics = async () => {
    const { match: { params: { id } } } = this.props;

    this.setState({ loading: true });

    const musics = await getMusics(id);

    this.setState({ musicsArray: musics, loading: false });
    console.log(musics);
  }

  showMusics = () => {
    const { musicsArray, loading } = this.state;
    const { artistName, artworkUrl100, collectionName } = musicsArray[0];

    return (
      loading
        ? <Loading />
        : (
          <section className="album_selected">
            <div className="data-album">
              <img src={ artworkUrl100 } alt="Capa do album" />
              <h1 data-testid="album-name">{ collectionName }</h1>
              <h2 data-testid="artist-name">{ artistName }</h2>
            </div>

            { musicsArray.slice(1).map((music) => {
              const { artworkUrl30, previewUrl, trackId, trackName } = music;
              return (
                <MusicCard
                  key={ trackId }
                  image={ artworkUrl30 }
                  trackname={ trackName }
                  previewUrl={ previewUrl }
                />);
            })}
          </section>
        ));
  }

  render() {
    return (
      <div data-testid="page-album">
        <Header />
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
