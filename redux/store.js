import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {blockReducer, buttonReducer} from './reducers';

const rootReducer = combineReducers({blockReducer, buttonReducer});

export const Store = createStore(rootReducer, applyMiddleware(thunk));