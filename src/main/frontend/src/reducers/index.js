import { combineReducers } from 'redux';
import {sortReducer} from './sort';
import {productsReducer} from './tea';

 const mainReducer = combineReducers({
    sort: sortReducer,
    tea: productsReducer,
});
export default mainReducer;