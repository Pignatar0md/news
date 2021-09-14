import {
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_ERROR,
  GET_ARTICLES,
  GET_ARTICLES_UPD_PAGE,
} from '../actions/types';

const INITIAL_STATE = {
  errorMessage: '',
  data: [],
  totalResults: 0,
  loading: false,
  page: 1,
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ARTICLES_SUCCESS:
      return {
        ...state,
        errorMessage: '',
        data: payload.articles,
        loading: false,
        totalResults: payload.totalResults,
      };
    case GET_ARTICLES_UPD_PAGE:
      return { ...state, page: payload };
    case GET_ARTICLES:
      return { ...state, errorMessage: '', loading: true };
    case GET_ARTICLES_ERROR:
      return { ...state, errorMessage: payload, loading: false };
    default:
      return state;
  }
};
