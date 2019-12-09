import {
    TAB_CREATE,
    TAB_CHANGE,
    EDITOR_CHANGE,
    SYNC_CODE
} from "../action.types";
import { editorDefaultValue } from "../../constants";

const initialState = {
    nodes: [
        {
            label: "New Tab",
            index: 0,
            value: editorDefaultValue
        }
    ],
    currentCode: "",
    syncDisabled: false,
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

const handleEditorChange = (state, { index, value }) => {
    const nodes = state.nodes.map(node => {
        if (node.index === index) {
            node.value = value;
        }

        return node;
    });

    return {
        ...state,
        nodes,
        syncDisabled: value === state.currentCode
    };
};

const handleSyncCode = state => {
    const ctx = state.nodes.find(node => node.index === state.currentTab);

    if (!ctx) {
        return state;
    }

    return {
        ...state,
        currentCode: ctx.value,
        syncDisabled: true
    };
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case TAB_CREATE:
            return handleTabCreate(state, payload);
        case TAB_CHANGE:
            return handleTabChange(state, payload);
        case EDITOR_CHANGE:
            return handleEditorChange(state, payload);
        case SYNC_CODE:
            return handleSyncCode(state, payload);
        default:
            return state;
    }
};

export default reducer;
