import React, { Component } from 'react';
import './Albums.scss';

class Album extends Component {
  render() {
    const { album } = this.props;
    return (
      <div className="album">
        <p className="title">{album.title}</p>
      </div>
    );
  }
}

export default Album;
