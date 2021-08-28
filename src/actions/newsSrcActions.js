import {
  GET_NEWS_SRC_SUCCESS,
  GET_NEWS_SRC_ERROR,
  GET_NEWS_SRC
} from './types';
import Endpoint from '../api/Endpoint';
import { NEWS_API_KEY } from '../constants';

export const getNews = () => async dispatch => {

  const options = {
    method: 'GET',
    url: `top-headlines/sources?apiKey=${NEWS_API_KEY}`
  };
  dispatch({ type: GET_NEWS_SRC });
  try {
    const data = await Endpoint(options);
    dispatch({ type: GET_NEWS_SRC_SUCCESS, payload: data.data.sources });
  } catch (e) {
    console.log(e);
    debugger
    dispatch({ type: GET_NEWS_SRC_ERROR, payload: `Error: ${e.toString()}` });
  }
};