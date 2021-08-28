import {
  GET_NEWS_SRC_SUCCESS,
  GET_NEWS_SRC_ERROR,
  GET_NEWS_SRC
} from '../actions/types';

const INITIAL_STATE = {
  errorMessage: '',
  data: [],
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_NEWS_SRC_SUCCESS:
        return { ...state, errorMessage: '', data: payload, loading: false };
      case GET_NEWS_SRC:
        return { ...state, errorMessage: '', loading: true  };
      case GET_NEWS_SRC_ERROR:
        return { ...state, errorMessage: payload , loading: false };
      default:
        return state;
  }
};
