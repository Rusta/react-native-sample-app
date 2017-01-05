import types from './actionTypes';

const postsUrl = 'https://jsonplaceholder.typicode.com/posts';

// note: the below action creators are wrapped in promises so that they can be chained

export const fetchPostsRequest = () => (
  (dispatch) => (
     new Promise((resolve) => {
      dispatch({ type: types.FETCH_POSTS_REQUEST });
      resolve();
    })
  )
);

export const fetchPosts = () => (
  (dispatch) => (
     new Promise((resolve, reject) => {
      fetch(postsUrl) // eslint-disable-line no-undef
        .then((res) => res.json())
        .then((posts) => {
          dispatch({ type: types.FETCH_POSTS_RESPONSE, payload: posts });
          resolve();
        })
        .catch((e) => {
          dispatch({ type: types.FETCH_POSTS_RESPONSE, payload: e, error: true });
          reject();
        });
    })
  )
);

export const clearPosts = () => (
   (dispatch) => (
     new Promise((resolve) => {
      dispatch({ type: types.CLEAR_POSTS });
      resolve();
    })
  )
);
