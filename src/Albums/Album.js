import React, { Component } from 'react';
import './Albums.scss';
import { fetchPhotos } from '../apiUtil';

class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      display: false,
    };
  }

  componentDidMount() {
    const { id } = this.props;
    const { display } = this.state;
    fetchPhotos(id).then((photos) => {
      this.setState({
        photos,
        display,
      });
    });
  }

  handleClick = () => {
    const { display } = this.state;
    this.setState({
      display: !display,
    });
  };

  render() {
    const { album } = this.props;
    const { photos, display } = this.state;
    return (
      <div className="album">
        <p className="title" onClick={this.handleClick}>
          {album.title}
        </p>
        {display ? (
          <div className="album-container">
            {photos.slice(0, 3).map((photo) => (
              <div className="thumbnail-container" key={photo.id}>
                <img src={photo.thumbnailUrl} />
                <p>{photo.title}</p>
              </div>
            ))}
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default Album;
