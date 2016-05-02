import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import user from './user.js';

export default combineReducers({
    routing: routerReducer,
    form: formReducer,
    user,
});
