import {GET_INPUTS} from './actions/PageActions';
chrome.runtime.onMessage.addListener(contentListener);

function contentListener(request, sender, sendResponse) {
    switch(request.type) {
        case GET_INPUTS:
            const inputs = document.getElementsByTagName('input').map(element => ({
                id: element.id,
                type: element.type
            }));

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