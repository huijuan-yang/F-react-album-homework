import React, { Component } from 'react';
import './Albums.scss';
import { fetchPhotos } from '../apiUtil';

class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
    };
  }

  componentDidMount() {
    const { id } = this.props;
    fetchPhotos(id).then((photos) => {
      this.setState({
        photos,
      });
    });
  }

  render() {
    const { album } = this.props;
    const { photos } = this.state;
    return (
      <div className="album">
        <p className="title">{album.title}</p>
        <div className="album-container">
          {photos.slice(0, 3).map((photo) => (
            <div className="thumbnail-container">
              <img src={photo.thumbnailUrl} />
              <p>{photo.title}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Album;
