import React from 'react';
import Photo from './photo';

class PhotoGrid extends React.Component {
    render() {
      return (
        <div className="photo-grid">
          {this.props.posts.map((post, index) => <Photo {... this.props} key={index} index={index} post={post} />)}
        </div>
      )
    }
}

export default PhotoGrid;
