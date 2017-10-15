import {GET_INPUTS} from './modules/PageActions';
import abstractElement from './modules/AbstractElement';

chrome.runtime.onMessage.addListener(contentListener);

function contentListener(request, sender, sendResponse) {
    switch(request.type) {
    case GET_INPUTS:
        const inputs = Array.from(document.getElementsByTagName('input')).map(element => abstractElement(element));
        const labels = Array.from(document.getElementsByTagName('label'))
            .filter(element => !!element.getAttribute('for'))
            .map(element => abstractElement(element));

        console.log('labels', labels);

        sendResponse({
            inputs,
            labels
        });

        return true;
    default:
        sendResponse({
            message: 'no known type specified'
        });
        return true;
    }
}