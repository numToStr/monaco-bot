import {
    MESSAGE_START,
    MESSAGE_SUCCESS,
    MESSAGE_FAILURE
} from "../action.types";

export const onMessage = () => ({
    type: MESSAGE_START
});

export const onMessageSuccess = () => ({
    type: MESSAGE_SUCCESS
});

export const onMessageFailure = () => ({
    type: MESSAGE_FAILURE
});
