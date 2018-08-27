import { combineReducers } from 'redux'
import { HELLO_WORLD, RESET,FETCH_POST } from './../actions'

let initialState = { message: 'Hello' }

const posts = (state=initialState, action) => {
  switch (action.type) {
    case HELLO_WORLD:
      return Object.assign({}, state, { message: 'Hello, World!' })
    case FETCH_POST:
      return action.posts;  
    case RESET:
    	return state = initialState 
    default:
      return state
  }
}

const helloReducer = combineReducers({
      posts: posts
})

export default helloReducer
