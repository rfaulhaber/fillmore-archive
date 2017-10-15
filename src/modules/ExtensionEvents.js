import {layouts, show} from './Extension';
import { queryCurrentTab, sendContentMessage } from './Browser';
import { buildFormFill } from './Extension';

export function scanButtonListener() {
    return {
        id: 'scan-button',
        type: 'click',
        callback: () => {
            console.log('I was clicked!');
            show(layouts.formFill);

            queryCurrentTab(chrome).then(tab => {
                return sendContentMessage(chrome, tab.id, {type: 'GET_INPUTS'});
            }).then(response => {
                console.log('response', response);

                buildFormFill(response);
            });
        }
    };
}

export function saveButtonListener() {

}

export function fillButtonListener() {

}

export function setAllListeners(listeners) {
    for (const listener of listeners) {
        console.log('listener', listener);
        const {id, type, callback} = listener;
        document.getElementById(id).addEventListener(type, callback);
    }
}