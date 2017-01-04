import types from './actionTypes';

const postsUrl = 'https://jsonplaceholder.typicode.com/posts';

// note: the below action creators are wrapped in promises so that they can be chained

export const fetchPostsRequest = () =>  {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      dispatch({type: types.FETCH_POSTS_REQUEST});
      resolve();
    });
  };
};

export const fetchPosts = () =>  {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      fetch(postsUrl)
        .then((res) => res.json())
        .then((posts) => {
          dispatch({type: types.FETCH_POSTS_RESPONSE, payload: posts});
          resolve();
        })
        .catch((e) => {
          dispatch({type: types.FETCH_POSTS_RESPONSE, payload: e, error: true});
          reject();
        });
    });
  };
};

export const clearPosts = () =>  {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      dispatch({type: types.CLEAR_POSTS});
      resolve();
    });
  };
};
