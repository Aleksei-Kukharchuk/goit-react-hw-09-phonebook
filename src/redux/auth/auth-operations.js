import axios from 'axios';
import authActions from './auth-actions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com'

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    }
}

const register = credentials => async dispatch => {
    dispatch(authActions.registerRequest());

    try {
        const response = await axios.post('/users/signup', credentials);

        token.set(response.data.token);
        dispatch(authActions.registerSucces(response.data));
    } catch (error) {
        dispatch(authActions.registerError(error.message));
    }
    
};
 
const login = credentials => async dispatch => {
    dispatch(authActions.loginRequest());

    try {
        const response = await axios.post('/users/login', credentials);

        token.set(response.data.token);
        dispatch(authActions.loginSucces(response.data));
    } catch (error) {
        dispatch(authActions.loginError(error.message));
    }
    
};
 
const logout = () => async dispatch => {
    dispatch(authActions.logoutRequest());

    try {
        await axios.post('/users/logout');

        token.unset();
        dispatch(authActions.logoutSucces());
    } catch (error) {
        dispatch(authActions.logoutError(error.message));
    }
    
};
 
const getCurrentUser = () => async (dispatch, getState) => {
    const {
        auth: { token: persistToken }
    } = getState();

    if (!persistToken) {
        return;
    }

    token.set(persistToken)

     dispatch(authActions.getCurrentUserRequest());

    try {
        const response = await axios.get('/users/current');

        dispatch(authActions.getCurrentUserSucces(response.data));
    } catch (error) {
        dispatch(authActions.getCurrentUserError(error.message));
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    token,
    register,
    login,
    logout,
    getCurrentUser
}