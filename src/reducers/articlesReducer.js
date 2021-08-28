import {
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_ERROR,
  GET_ARTICLES
} from '../actions/types';

const INITIAL_STATE = {
  errorMessage: '',
  data: [],
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ARTICLES_SUCCESS:
        return { ...state, errorMessage: '', data: payload, loading: false };
      case GET_ARTICLES:
        return { ...state, errorMessage: '', loading: true  };
      case GET_ARTICLES_ERROR:
        return { ...state, errorMessage: payload , loading: false };
      default:
        return state;
  }
};
