// reducer needs 2 things - 
// 1.action - what happend
// 2.copy of the current state

// we need a default value becasue the first time this runs
// state will be null

// remember: every reducer will run upon dispatch! 
export function posts(state = [], action) {
  console.log('the post will change');
  console.log(state, action);
  return state;
}

export default posts;