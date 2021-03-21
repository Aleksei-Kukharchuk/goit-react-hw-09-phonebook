import { createAction } from '@reduxjs/toolkit'

const registerRequest = createAction('auth/registerRequest');
const registerSucces = createAction('auth/registerSucces');
const registerError = createAction('auth/registerError');

const loginRequest = createAction('auth/loginRequest');
const loginSucces = createAction('auth/loginSucces');
const loginError = createAction('auth/loginError');

const logoutRequest = createAction('auth/logoutRequest');
const logoutSucces = createAction('auth/logoutSucces');
const logoutError = createAction('auth/logoutError');

const getCurrentUserRequest = createAction('auth/getCurrentUserRequest');
const getCurrentUserSucces = createAction('auth/getCurrentUserSucces');
const getCurrentUserError = createAction('auth/getCurrentUserError');

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    registerRequest,
    registerSucces,
    registerError,
    loginRequest,
    loginSucces,
    loginError,
    logoutRequest,
    logoutSucces,
    logoutError,
    getCurrentUserRequest,
    getCurrentUserSucces,
    getCurrentUserError
}