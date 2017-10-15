import {
    ADD_EVENT_LISTENER,
    CHANGE_LAYOUT
} from '../actions/ExtensionActions';

import {layouts} from '../modules/Extension';

const initialState = {
    listeners: [],
    layout: layouts.root
};

export default function Extension(state = initialState, action) {
    switch(action.type) {
        case ADD_EVENT_LISTENER:
            return Object.assign({}, state, {
                listeners: state.listeners.concat(action.listener)
            });
        case CHANGE_LAYOUT:
            return Object.assign({}, state, {
                lastLayout: state.layout,
                layout: action.layout
            });
        default:
            return state;
        }
}