import React from "react";
import { connect } from "react-redux";
import MonacoEditor from "react-monaco-editor";
import { onEditorChange } from "../../store/actions/tab.action";
import { Box } from "@material-ui/core";

const Editor = ({ $onEditorChange, onSubmit, panel, ...props }) => {
    const onChangeCode = value => {
        $onEditorChange({
            value,
            index: panel.index
        });
    };

    const onEditorMount = editor => {
        editor.focus();
    };

    const options = {
        selectOnLineNumbers: true
    };

    return (
        <Box height="100%" {...props}>
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

const mapDispatchToProps = {
    $onEditorChange: onEditorChange
};

export default connect(
    null,
    mapDispatchToProps
)(Editor);
