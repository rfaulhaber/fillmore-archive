export const SCAN_PAGE = 'SCAN_PAGE';
export const ADD_EVENT_LISTENER = 'ADD_EVENT_LISTENER';

export function addEventListener(listener) {
    return {
        type: ADD_EVENT_LISTENER,
        listener
    };
}