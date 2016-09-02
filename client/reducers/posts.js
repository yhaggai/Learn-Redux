// reducer needs 2 things - 
// 1.action - what happend
// 2.copy of the current state

// we need a default value becasue the first time this runs
// state will be null

// remember: every reducer will run upon dispatch! 
// 
// functional programming - no mutaiton
export function posts(state = [], action) {
  switch (action.type) {
    case 'INCREMENT_LIKES':
    const i = action.index;
      return [
      ...state.slice(0,i),
      {...state[i], likes: state[i].likes +1},
      ...state.slice(i+1)
      ]
    default:
      return state;
  }
  return state;
}

export default posts;