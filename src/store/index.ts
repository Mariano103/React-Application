// src/store/index.ts
import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { itemsReducer } from './reducer';

// Combining all reducers (just one for now)
const rootReducer = combineReducers({
  items: itemsReducer,
});

// Creating the Redux store
const store = createStore(rootReducer);

export default store;
