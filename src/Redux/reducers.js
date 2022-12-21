import { combineReducers } from 'redux';

const user = (state = null) => state;

const lists = (state = [], action) => {
    switch(action.type) {
        case "ADD_LISTING":
            return[...state, action.value];

        case "REMOVE_LISTING":
            const copy = [...state];
            copy.splice(action.value, 1);
            return copy;
        default:
            return state;
    }
}

export default combineReducers({ user, lists })