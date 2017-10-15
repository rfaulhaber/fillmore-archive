import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index';

const store = createStore(reducers, applyMiddleware(thunk));

console.log('index loaded');


let pageDocument;

loadBody().then(() => {
    console.log('pageDocument', pageDocument);
});

function getCurrentTab() {
    console.log('getting current tab');
    return new Promise(resolve => {
        chrome.tabs.query(chromeTabsQuery, tabs => {
                console.log('tabs received', !!tabs);
                if (tabs) {
                    resolve(tabs[0]);
                } else {
                    reject();
                }
        });
    });
}

function sendTabMessage(tabId, message) {
    console.log('sending tab message');
    return new Promise((resolve, reject) => {
        chrome.tabs.sendMessage(tabId, message, response => {
            if (response) {
                console.log('sendTabMessage response', response);
                resolve(response);
            } else {
                reject();
            }
        });
    });
}

function loadBody() {
    console.log('attempting to load body');
    return getCurrentTab().then(currentTab => {
        console.log('currentTab', currentTab);
        return sendTabMessage(currentTab.id, {type: 'document'});
    }).then(response => {
        console.log('response', !!response, !!response.document);
        pageDocument = response.document;
    });
}