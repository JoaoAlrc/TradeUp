import { createStore } from 'redux';

const INITIAL_STATE = {
    user: {}
}

function UserDetail(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "CHANGE_USER":
            return { user: action.user };
        default:
            return state;
    }
}

const store = createStore(UserDetail);

export default store;