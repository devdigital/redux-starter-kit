import { handleActions } from 'redux-actions';
import immutable from 'immutable';
import * as actionTypes from '../constants/actionTypes';

const initialState = new immutable.Record({
    isAuthenticating: false,
    user: null,
    error: null,
})();

const user = handleActions({
    [actionTypes.SIGN_IN_START]: (state) => state.set('isAuthenticating', true).set('user', null),

    [actionTypes.SIGN_IN_COMPLETE]: (state, action) =>
        state.set('isAuthenticating', false).set('user', action.payload),

    [actionTypes.SIGN_IN_ERROR]: (state, action) => state.set('error', action.payload).set('user', null),

}, initialState);

export default user;
