import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

function CodeEditor({ code }) {
    return (
        <AceEditor
            mode="javascript"
            theme="monokai"
            value={code}
            readOnly
            width="100%"
            height="500px"
        />
    );
}

export default CodeEditor;
