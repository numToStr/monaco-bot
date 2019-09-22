import {
    MESSAGE_START,
    MESSAGE_SUCCESS,
    MESSAGE_FAILURE
} from "../action.types";

export const onMessageStart = () => ({
    type: MESSAGE_START
});

export const onMessageSuccess = payload => ({
    type: MESSAGE_SUCCESS,
    payload
});

export const onMessageFailure = () => ({
    type: MESSAGE_FAILURE
});
