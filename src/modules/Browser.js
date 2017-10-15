const browserTabQuery = {
    active: true,
    currentWindow: true
};

export function queryCurrentTab(browser) {
    return new Promise((resolve, reject) => {
        browser.tabs.query(browserTabQuery, tabs => {
            if (tabs) {
                resolve(tabs[0]);
            } else {
                reject('query did not return with tab info');
            }
        });
    });
}

export function sendContentMessage(browser, tabId, message) {
    return new Promise((resolve, reject) => {
        browser.tabs.sendMessage(tabId, message, response => {
            if (response) {
                resolve(response);
            } else {
                reject('page did not send back response');
            }
        });
    });
}