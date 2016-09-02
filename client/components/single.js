import React from 'react';
import Photo from './photo';
import Comments from './comments';
class Single extends React.Component {
    render() {
      // get the index
      const { postId } = this.props.params
      const i = this.props.posts.findIndex((post) => post.code === postId);
      const post = this.props.posts[i];
      const postComments = this.props.comments[postId] || [];
      return (
        <div className="single-photo">
          <Photo index={i} post={post} {...this.props} />
          <Comments postComments={postComments} {...this.props}></Comments>
        </div>
      )
    }
}

export default Single;
