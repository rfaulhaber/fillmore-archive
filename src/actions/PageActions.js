import { sendPageMessage } from '../actions/BrowserActions';

export const GET_INPUTS = 'GET_INPUTS';
export const FILL_INPUTS = 'FILL_INPUTS';

export function getInputs(inputs) {
    return {
        type: GET_INPUTS,
        inputs
    };
}

export function fillInputs(values) {
    return {
        type: FILL_INPUTS,
        values
    }
}