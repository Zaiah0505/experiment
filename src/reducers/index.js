import authReducer from './auth';
import drawerReducer from './drawer';
import {combineReducers} from 'redux';

export default combineReducers(
  {
    auth: authReducer,
    drawer: drawerReducer
  }
)