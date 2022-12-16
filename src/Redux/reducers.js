import { combineReducers } from 'redux';

const user = (state = null) => state;

const lists = (state = [], action) => {
    return state
};

export default combineReducers({ user, lists });