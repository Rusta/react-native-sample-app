import types from '../actions/actionTypes';

const initialState = {
  loading: true,
  error: false,
  posts: [],
};

export const reducer = (state = initialState, action) => {
  const {type, payload, error} = action;
  switch (type) {
    case types.FETCH_POSTS_REQUEST: {
      return {...state, loading: true, error: false};
    }
    case types.FETCH_POSTS_RESPONSE: {
      if (error) {
        return {...state, loading: false, error: true};
      }
      return {...state, loading: false, posts: payload};
    }
    case types.CLEAR_POSTS: {
      return {...state, posts: []};
    }
    default: return state;
  }
};

export default reducer;
