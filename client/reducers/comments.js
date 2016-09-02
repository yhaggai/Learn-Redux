
export function comments(state = [], action) {
  if (typeof action.postId !== 'undefined'){
    return {
      // take the current state
      ...state,
      // overwrite it with a new one
      [action.postId]: postComments(state[action.postId], action)
    }
    // call another reducer
  }
  return state;
}

export function postComments(state = [], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      // return existing + comment
      return [...state, {
        user: action.author,
        text: action.comment
      }];
    case 'REMOVE_COMMENT':
      return [
      ...state.slice(0, action.index),
      ...state.slice(action.index + 1)
      ]
    default:
      return state;
  }
}

export default comments;