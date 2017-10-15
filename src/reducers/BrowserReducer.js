import {
    SET_CURRENT_TAB,
    SEND_MESSAGE,
    RECEIVE_RESPONSE
} from '../actions/BrowserActions';

export default function Browser(state = {}, action) {
    switch(action.type) {
        case SET_CURRENT_TAB:
            return makeNewState(state, {
                tab: action.tab
            });
        case SEND_MESSAGE:
            return makeNewState(state, {
                sending: true,
                message: action.message
            });
        case RECEIVE_RESPONSE:
            return makeNewState(state, {
                sending: false,
                response: action.response
            });
        default:
            return state;
    };
}

function makeNewState(state, newState) {
    return Object.assign({}, state, newState);
}