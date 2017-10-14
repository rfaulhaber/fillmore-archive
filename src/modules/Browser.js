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