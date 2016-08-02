import { createAction } from 'redux-actions';
import AuthService from '../services/AuthService';
import immutable from 'immutable';
import * as actionTypes from '../constants/actionTypes';

export const signIn = (username, password) =>
    (dispatch) => {
        dispatch(createAction(actionTypes.SIGN_IN_START)());
        return AuthService.signIn(username, password)
            .then(user => dispatch(createAction(actionTypes.SIGN_IN_COMPLETE)(user)))
            .catch(error => dispatch(createAction(actionTypes.SIGN_IN_ERROR)(error)));
    };
