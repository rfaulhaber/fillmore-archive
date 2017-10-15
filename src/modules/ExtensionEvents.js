export function scanButtonListener() {
    return {
        id: 'scan-button',
        type: 'click',
        callback: () => {
            console.log('I was clicked!');
        }
    }
}

export function setAllListeners(listeners) {
    for (const listener of listeners) {
        const {id, type, callback} = listener;
        document.getElementById(id).addEventListener(type, callback);
    }
}