import {
    ADD_EVENT_LISTENER
} from '../actions/ExtensionActions';

const initialState = {
    listeners: []
};

export default function Extension(state = initialState, action) {
    switch(action.type) {
        case ADD_EVENT_LISTENER:
            return Object.assign({}, state, {
                listeners: state.listeners.concat(action.listener)
            });
        default:
            return state;
    }
}