import {GET_INPUTS} from './modules/PageActions';
import abstractElement from './modules/AbstractElement';

chrome.runtime.onMessage.addListener(contentListener);

console.log('I was loaded');

function contentListener(request, sender, sendResponse) {
    const abstractMapper = element => abstractElement(element);

    switch(request.type) {
    case GET_INPUTS:
        const inputs = Array.from(document.getElementsByTagName('input')).map(abstractMapper);
        const labels = Array.from(document.getElementsByTagName('label'))
            .filter(element => !!element.getAttribute('for'))
            .map(abstractMapper);

        const selects = Array.from(document.getElementsByTagName('select')).map(abstractMapper);

        console.log('sending response');

        sendResponse({
            inputs,
            labels,
            selects
        });

        return true;
    default:
        sendResponse({
            message: 'no known type specified'
        });
        return true;
    }
}