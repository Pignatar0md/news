import axios from 'axios';
import { NEWS_URL } from '../constants';

export default axios.create({
  baseURL: NEWS_URL
});
