chrome.runtime.onMessage.addListener(contentListener);

function contentListener(request, sender, sendResponse) {
    switch(request.type) {
        case 'document':
            sendResponse({
                document
            });
            return true;
        default:
            sendResponse({
                message: 'no known type specified'
            });
            return true;
    }
}