export function browserMessage(action, params) {
    return {
        action,
        params
    };
}

export function browserResponse(params) {
    return {
        params
    };
}