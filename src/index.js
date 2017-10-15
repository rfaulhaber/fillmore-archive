import {createStore, applyMiddleware} from 'redux';
import { addEventListener } from './actions/ExtensionActions';
import {scanButtonListener, setAllListeners} from './modules/ExtensionEvents';
import {layouts, show} from './modules/Extension';
import thunk from 'redux-thunk';
import reducers from './reducers/index';

const store = createStore(reducers, applyMiddleware(thunk));
store.subscribe(subscriptionHandler);

store.dispatch(addEventListener(scanButtonListener(store.dispatch)));

setAllListeners(store.getState().Extension.listeners);

function subscriptionHandler() {
    console.log('something was dispatched!');

    const currentState = store.getState();
    const extensionState = currentState.Extension;
    const {lastLayout, layout} = extensionState;

    console.log('layouts', lastLayout, layout);

    if (lastLayout !== layout) {
        console.log('attempting to change layout');
        show(layout);
    }   
}