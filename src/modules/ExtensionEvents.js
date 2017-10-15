import {changeLayout} from '../actions/ExtensionActions';
import {layouts} from './Extension';

export function scanButtonListener(dispatch) {
    return {
        id: 'scan-button',
        type: 'click',
        callback: () => {
            console.log('I was clicked!');
            dispatch(changeLayout(layouts.formFill));
        }
    };
}

export function setAllListeners(listeners) {
    for (const listener of listeners) {
        const {id, type, callback} = listener;
        document.getElementById(id).addEventListener(type, callback);
    }
}