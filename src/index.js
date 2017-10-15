import {createStore, applyMiddleware} from 'redux';
import { addEventListener } from './actions/ExtensionActions';
import {scanButtonListener, setAllListeners} from './modules/ExtensionEvents';
import thunk from 'redux-thunk';
import reducers from './reducers/index';

const store = createStore(reducers, applyMiddleware(thunk));

store.dispatch(addEventListener(scanButtonListener()));

setAllListeners(store.getState().Extension.listeners);