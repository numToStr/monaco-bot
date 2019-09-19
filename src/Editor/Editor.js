import React, { useState, Fragment } from "react";
import MonacoEditor from "react-monaco-editor";
import { Button } from "@material-ui/core";

const Editor = ({ onSubmit }) => {
    const [code, setCode] = useState("");

    const onChangeCode = value => {
        setCode(value);
    };

    const onEditorMount = editor => {
        editor.focus();
    };

    const options = {
        selectOnLineNumbers: true
    };

    return (
        <Fragment>
            <MonacoEditor
                width="100%"
                language="javascript"
                theme="vs-dark"
                value={code}
                options={options}
                onChange={onChangeCode}
                editorDidMount={onEditorMount}
            />
            <Button
                style={{
                    position: "absolute",
                    top: 30,
                    right: 50
                }}
                variant="contained"
                onClick={() => onSubmit(code)}
            >
                Run
            </Button>
        </Fragment>
    );
};

export default Editor;
