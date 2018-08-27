import axios from 'axios';


export const HELLO_WORLD = 'HELLO_WORLD'
export const RESET = 'RESET'
export const FETCH_POST = 'FETCH_POST';


const apiUrl = 'http://localhost:3000/priceinfo';



export const helloWorld = () => {
  return {
    type: HELLO_WORLD
  }
}

export const reset = () => {
  return {
    type: RESET
  }
}



export const fetchPosts = (posts) => {
  return {
    type: FETCH_POST,
    posts
  }
};

export const fetchAllPosts = () => {
  return (dispatch) => {
    return axios.get(apiUrl)
      .then(response => {
        dispatch(fetchPosts(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};
