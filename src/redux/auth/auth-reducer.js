import { combineReducers } from 'redux'
import { createReducer } from '@reduxjs/toolkit'
import authActions from './auth-actions';

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
    [authActions.registerSucces]: (_, { payload }) => payload.user,
    [authActions.loginSucces]: (_, { payload }) => payload.user,
    [authActions.logoutSucces]: () => initialUserState,
    [authActions.getCurrentUserSucces]: (_, { payload }) => payload,
})

const token = createReducer(null, {
    [authActions.registerSucces]: (_, { payload }) => payload.token,
    [authActions.loginSucces]: (_, { payload }) => payload.token,
    [authActions.logoutSucces]: () => null,
});

const error = createReducer(null, {
    [authActions.registerError]: (_, { payload }) => payload,
    [authActions.loginError]: (_, { payload }) => payload,
    [authActions.logoutError]: (_, { payload }) => payload,
    [authActions.getCurrentUserError]: (_, {payload}) => payload,
});

const isAuthenticated = createReducer(false, {
    [authActions.registerSucces]: () => true,
    [authActions.loginSucces]: () => true,
    [authActions.getCurrentUserSucces]: () => true,
    [authActions.registerError]: () => false,
    [authActions.loginError]: () => false,
    [authActions.getCurrentUserError]: () => false,
    [authActions.logoutSucces]: () => false,
})

export default combineReducers({
    user,
    isAuthenticated,
    token,
    error
})