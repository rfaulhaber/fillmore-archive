import { 
    GET_INPUTS, 
    FILL_INPUTS 
} from '../actions/PageActions';

export default function Page(state = {}, action) {
    switch (action.type) {
    case GET_INPUTS:
        return Object.assign({}, state, {
            inputs: action.inputs
        });
    case FILL_INPUTS:
        return Object.assign({}, state, {
            values: action.values
        });
    default: 
        return state;
    }
}