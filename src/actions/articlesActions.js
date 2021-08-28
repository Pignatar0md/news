import {
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_ERROR,
  GET_ARTICLES
} from './types';
import Endpoint from '../api/Endpoint';
import { NEWS_API_KEY } from '../constants';

export const getArticles = src => async dispatch => {

  const options = {
    method: 'GET',
    url: `top-headlines?sources=${src}&apiKey=${NEWS_API_KEY}`
  };
  dispatch({ type: GET_ARTICLES });
  try {
    const data = await Endpoint(options);
    dispatch({ type: GET_ARTICLES_SUCCESS, payload: data.data.articles });
  } catch (e) {
    debugger
    dispatch({ type: GET_ARTICLES_ERROR, payload: `Error: ${e.toString()}` });
  }
};