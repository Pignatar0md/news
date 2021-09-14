import { combineReducers } from 'redux';
import newsSourcesReducer from './newsSourcesReducer';
import articlesReducer from './articlesReducer';

export default combineReducers({
  newsSources: newsSourcesReducer,
  articles: articlesReducer,
});
