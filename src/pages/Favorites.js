import React, { Component } from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';

class Favorites extends Component {
  state = {
    loading: true,
    favoriteSongs: '',
  }

  componentDidMount() {
    this.recoverFavoriteSongs();
  }

  recoverFavoriteSongs = async () => {
    const favoriteSongs = await getFavoriteSongs();

    favoriteSongs.forEach((song) => {
      song.checked = true;
    });
    this.setState({ loading: false, favoriteSongs });
  }

  removeFavoriteSong = async ({ target }) => {
    const { id } = target;
    const { favoriteSongs } = this.state;

    this.setState({ loading: true });

    const song = favoriteSongs.find(({ trackId }) => trackId === Number(id));

    await removeSong(song);

    const newArray = favoriteSongs.filter((eachSong) => eachSong.trackId !== Number(id));
    this.setState({ loading: false, favoriteSongs: newArray });
  }

  render() {
    const { loading, favoriteSongs } = this.state;

    return (
      <div data-testid="page-favorites">
        <Header />
        { loading ? <Loading />
          : (
            favoriteSongs.map((song) => {
              const { artworkUrl30, previewUrl, trackId, trackName, checked } = song;

              return (
                <MusicCard
                  key={ trackId }
                  image={ artworkUrl30 }
                  name={ trackName }
                  preview={ previewUrl }
                  id={ trackId }
                  checked={ checked }
                  onChange={ this.removeFavoriteSong }
                />
              );
            })
          )}
      </div>
    );
  }
}

export default Favorites;
