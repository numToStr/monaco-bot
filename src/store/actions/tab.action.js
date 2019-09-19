import { TAB_CREATE, TAB_CHANGE } from "../action.types";

export const onTabCreate = payload => ({
    type: TAB_CREATE,
    payload
});

export const onTabChange = payload => ({
    type: TAB_CHANGE,
    payload
});
