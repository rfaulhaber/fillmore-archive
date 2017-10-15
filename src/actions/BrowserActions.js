import {queryCurrentTab, sendContentMessage} from '../modules/Browser';

export const SET_CURRENT_TAB = 'SET_CURRENT_TAB';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const RECEIVE_RESPONSE = 'RECEIVE_RESPONSE';

export function getCurrentTab(browser) {
    return dispatch => {
        return queryCurrentTab(browser).then(tab => dispatch(setCurrentTab(tab)));
    };
}

export function sendPageMessage(browser, tab, message) {
    return dispatch => {
        dispatch(sendMessage(message));
        return sendContentMessage(browser, tab, message).then(response => dispatch(receiveResponse(response)));
    };
}

function setCurrentTab(tab) {
    return {
        type: SET_CURRENT_TAB,
        tab
    };
}

function sendMessage(message) {
    return {
        type: SEND_MESSAGE,
        message
    };
}

function receiveResponse(response) {
    return {
        type: RECEIVE_RESPONSE, 
        response
    };
}