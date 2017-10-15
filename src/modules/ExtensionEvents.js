export function registerListener(id, type, callback) {
    return {
        id, type, callback
    };
}

export function setAllListeners(listeners) {
    for (const listener of listeners) {
        document.getElementById(listener.id).addEventListener(type, callback);
    }
}