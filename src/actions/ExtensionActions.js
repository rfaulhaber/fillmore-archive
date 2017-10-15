export const SCAN_PAGE = 'SCAN_PAGE';
export const ADD_EVENT_LISTENER = 'ADD_EVENT_LISTENER';
export const CHANGE_LAYOUT = 'CHANGE_LAYOUT';

export function addEventListener(listener) {
    return {
        type: ADD_EVENT_LISTENER,
        listener
    };
}

export function changeLayout(layout) {
    return {
        type: CHANGE_LAYOUT,
        layout
    };
}