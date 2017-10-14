import {SET_CURRENT_TAB} from '../actions/BrowserActions';

export function Browser(state = {}, action) {
    switch(action.type) {
        case SET_CURRENT_TAB:
            return Object.assign({}, state, {
                tab: action.tab
            });
        default:
            return state;
    };
}