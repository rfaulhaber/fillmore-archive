import {queryCurrentTab} from '../modules/Browser';

export const SET_CURRENT_TAB = 'SET_CURRENT_TAB';

const browserTabQuery = {
    active: true,
    currentWindow: true
};

export function getCurrentTab(browser) {
    return dispatch => {
        return queryCurrentTab.then(tab => {

        });
    };
}

export function setCurrentTab(tab) {
    return {
        type: SET_CURRENT_TAB,
        tab
    };
}