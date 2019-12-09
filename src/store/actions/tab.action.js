import {
    TAB_CREATE,
    TAB_CHANGE,
    EDITOR_CHANGE,
    SYNC_CODE
} from "../action.types";

export const onTabCreate = payload => ({
    type: TAB_CREATE,
    payload
});

export const onTabChange = payload => ({
    type: TAB_CHANGE,
    payload
});

export const onEditorChange = payload => ({
    type: EDITOR_CHANGE,
    payload
});

export const onSyncCode = () => ({
    type: SYNC_CODE
});
