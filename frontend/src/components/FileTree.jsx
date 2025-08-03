import React from "react";

function FileTree({ files, onSelect }) {
    return (
        <ul>
            {files.map(file => (
                <li key={file.path} onClick={() => file.type === "file" && onSelect(file)}>
                    {file.type === "dir" ? "📁" : "📄"} {file.name}
                </li>
            ))}
        </ul>
    );
}

export default FileTree;
