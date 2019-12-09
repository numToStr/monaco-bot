import {
    TAB_CREATE,
    TAB_CHANGE,
    EDITOR_CHANGE,
    SYNC_CODE
} from "../action.types";

const value = `// Start typing your first program

async function main(message) {
    Bot.reply(message)
}
`;

const initialState = {
    nodes: [
        {
            label: "New Tab",
            index: 0,
            value
        }
    ],
    currentCode: "",
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
        nodes
    };
};

const handleSyncCode = state => {
    const ctx = state.nodes.find(node => node.index === state.currentTab);

    if (!ctx) {
        return state;
    }

    return {
        ...state,
        currentCode: ctx.value
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
