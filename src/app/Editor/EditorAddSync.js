import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Tooltip, IconButton, Button } from "@material-ui/core";
import { editorDefaultValue } from "../../constants";
import AddIcon from "../../components/AddIcon";
import { onTabCreate, onSyncCode } from "../../store/actions/tab.action";

const EditorAddSync = () => {
    const dispatch = useDispatch();
    const state = useSelector(store => ({
        tabLength: store.tabs.nodes.length,
        syncDisabled: store.tabs.syncDisabled,
    }));

    const addTab = () => {
        const tLength = state.tabLength;
        dispatch(
            onTabCreate({
                node: {
                    label: `Untitled ${tLength}`,
                    value: editorDefaultValue,
                    index: tLength,
                },
                currentTab: tLength,
            })
        );
    };

    const syncCode = () => {
        dispatch(onSyncCode());
    };

    return (
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Tooltip arrow placement="right" title="New Tab">
                <Box ml={1}>
                    <IconButton size="small" onClick={addTab}>
                        <AddIcon fontSize="small" />
                    </IconButton>
                </Box>
            </Tooltip>
            <Button
                size="small"
                variant="contained"
                onClick={syncCode}
                disabled={state.syncDisabled}
            >
                Sync
            </Button>
        </Box>
    );
};

export default memo(EditorAddSync);
