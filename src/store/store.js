
import { createStore, applyMiddleware } from 'redux';
import itemReducer from '../reducer/itemReducer';
import queryReducer from '../reducer/queryReducer';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';


export const store = createStore(combineReducers({ queryReducer, itemReducer }), applyMiddleware(thunk));
