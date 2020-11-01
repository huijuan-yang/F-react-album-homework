import React, { Component } from 'react';
import './Albums.scss';
import { fetchAlbums } from '../apiUtil';

class Albums extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
    };
  }

  componentDidMount() {
    fetchAlbums().then((albums) => {
      this.setState({
        albums,
      });
    });
  }

  render() {
    const { albums } = this.state;
    return (
      <section className="Albums">
        {albums.map((album) => (
          <div className="album">
            <p className="title">{album.title}</p>
          </div>
        ))}
      </section>
    );
  }
}

export default Albums;
