import React, { Component } from 'react';
import './Albums.scss';
import Album from './Album';

class Albums extends Component {
  render() {
    const { albums } = this.props;
    return (
      <section className="Albums">
        {albums.map((album) => (
          <Album key={album.id} album={album} id={album.id} />
        ))}
      </section>
    );
  }
}

export default Albums;
