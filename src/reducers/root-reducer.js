import { combineReducers } from 'redux';
import { mainPageReducer } from './main-page-reducer';

export const rootReducer = combineReducers({
  mainPage: mainPageReducer,
});
