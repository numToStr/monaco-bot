import React, { memo } from "react";
import { useDispatch } from "react-redux";
import MonacoEditor from "react-monaco-editor";
import Box from "@material-ui/core/Box";
import { onEditorChange } from "../../store/actions/tab.action";

const options = {
    selectOnLineNumbers: true,
    minimap: {
        enabled: false,
        maxColumn: 0,
    },
    scrollbar: {
        horizontal: "hidden",
        vertical: "hidden",
        verticalScrollbarSize: 0,
    },
};

const EditorPanel = ({ onSubmit, panel, ...props }) => {
    const dispatch = useDispatch();

    const onChangeCode = value => {
        dispatch(
            onEditorChange({
                value,
                index: panel.index,
            })
        );
    };

    const onEditorMount = editor => {
        editor.focus();
    };

    return (
        <Box height="100%" width="100%" {...props}>
            <MonacoEditor
                language="javascript"
                theme="vs-dark"
                defaultValue={panel.value}
                options={options}
                onChange={onChangeCode}
                editorDidMount={onEditorMount}
            />
        </Box>
    );
};

export default memo(EditorPanel);
