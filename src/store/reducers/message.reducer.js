import {
    MESSAGE_START,
    MESSAGE_SUCCESS,
    MESSAGE_FAILURE
} from "../action.types";

const initialState = {
    nodes: [],
    error: null
};

const handleMessageStart = (state, payload) => {
    return state;
};
const handleMessageSuccess = (state, payload) => {
    return {
        ...state,
        nodes: [...state.nodes, payload]
    };
};

const handleMessageFailure = (state, payload) => {
    return state;
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case MESSAGE_START:
            return handleMessageStart(state, payload);
        case MESSAGE_SUCCESS:
            return handleMessageSuccess(state, payload);
        case MESSAGE_FAILURE:
            return handleMessageFailure(state, payload);
        default:
            return state;
    }
};

export default reducer;
