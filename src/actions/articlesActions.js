import {
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_ERROR,
  GET_ARTICLES,
  GET_ARTICLES_UPD_PAGE,
} from './types';
import Endpoint from '../api/Endpoint';
import { NEWS_API_KEY } from '../constants';

export const getArticles =
  ({ src, pageSize, auxPage }) =>
  async (dispatch) => {
    const options = {
      method: 'GET',
      url: `top-headlines?sources=${src}&pageSize=${pageSize}&page=${auxPage}&apiKey=${NEWS_API_KEY}`,
    };
    dispatch({ type: GET_ARTICLES });
    try {
      const data = await Endpoint(options);
      dispatch({ type: GET_ARTICLES_SUCCESS, payload: data.data });
    } catch (e) {
      dispatch({ type: GET_ARTICLES_ERROR, payload: `Error: ${e.toString()}` });
    }
  };

export const updatePage = (page) => (dispatch) => {
  dispatch({ type: GET_ARTICLES_UPD_PAGE, payload: page });
};
