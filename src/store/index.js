import {createStore, combineReducers, compose} from 'redux';
import ePodComponent from './reducer/epod';
import commonComponent from './reducer/common';
import yardManagementComponent from './reducer/yardmanagement';

const rootReducer = combineReducers({
  ePodComponent,
  commonComponent,
  yardManagementComponent,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers());

export default store;
