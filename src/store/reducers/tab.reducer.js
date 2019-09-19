import { TAB_CREATE, TAB_CHANGE } from "../action.types";

const initialState = {
    nodes: [
        {
            label: "New Tab",
            index: 0
        }
    ],
    currentTab: 0
};

const handleTabCreate = (state, { node, currentTab }) => ({
    ...state,
    nodes: [...state.nodes, node],
    currentTab
});

const handleTabChange = (state, { currentTab }) => ({
    ...state,
    currentTab
});

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case TAB_CREATE:
            return handleTabCreate(state, payload);
        case TAB_CHANGE:
            return handleTabChange(state, payload);
        default:
            return state;
    }
};

export default reducer;
