import {GET_INPUTS} from './actions/PageActions';
import abstractElement from './modules/AbstractElement';

chrome.runtime.onMessage.addListener(contentListener);

function contentListener(request, sender, sendResponse) {
    switch(request.type) {
    case GET_INPUTS:
        const inputs = document.getElementsByTagName('input').map(element => abstractElement(element));

        sendResponse({
            inputs
        });

        return true;
    default:
        sendResponse({
            message: 'no known type specified'
        });
        return true;
    }
}