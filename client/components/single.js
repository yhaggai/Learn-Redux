import React from 'react';
import Photo from './photo';
import Comment from './comment';
class Single extends React.Component {
    render() {
      // get the index
      const i = this.props.posts.findIndex((post) => post.code === this.props.params.postId);
      const post = this.props.posts[i];
      return (
        <div className="single-photo">
          <Photo index={i} post={post} {...this.props} />
          <Comment></Comment>
        </div>
      )
    }
}

export default Single;
