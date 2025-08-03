import React, { useEffect, useState } from "react";
import axios from "axios";
import StudentList from "./components/StudentList";
import FileTree from "./components/FileTree";
import CodeEditor from "./components/CodeEditor";

function App() {
  const [students, setStudents] = useState([]);
  const [files, setFiles] = useState([]);
  const [code, setCode] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/submissions")
      .then(res => setStudents(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleStudentSelect = (student) => {
    const parts = student.repo.replace("https://github.com/", "").split("/");
    const owner = parts[0];
    const repo = parts[1];
    axios.get(`http://localhost:5000/api/submissions/files?owner=${owner}&repo=${repo}`)
      .then(res => setFiles(res.data))
      .catch(err => console.error(err));
  };

  const handleFileSelect = (file) => {
    axios.get(`http://localhost:5000/api/submissions/file-content?url=${file.download_url}`)
      .then(res => setCode(res.data))
      .catch(err => console.error(err));
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "20%" }}>
        <StudentList students={students} onSelect={handleStudentSelect} />
      </div>
      <div style={{ width: "30%" }}>
        <FileTree files={files} onSelect={handleFileSelect} />
      </div>
      <div style={{ width: "50%" }}>
        <CodeEditor code={code} />
      </div>
    </div>
  );
}

export default App;
