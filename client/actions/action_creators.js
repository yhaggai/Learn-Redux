// this is called action creator because these are the dispatcher 
// increment
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

// add comment

export function addComment(postId, auther, comment) {
  return {
    type: 'ADD_COMMNET',
    postId,
    auther,
    comment
  }
}

// remove comment

export function removeComment(postId, index) {
  return {
    type: 'REMOVE_COMMENT',
    index,
    postId
  }
}