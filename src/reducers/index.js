import {combineReducers} from 'redux';
import Page from './PageReducer';
import Extension from './ExtensionReducer';
import Browser from './BrowserReducer';

const reducers = combineReducers({
    Page,
    Extension,
    Browser
});

export default reducers;