import React from "react";

function StudentList({ students, onSelect }) {
    return (
        <div>
            <h3>Student Submissions</h3>
            <ul>
                {students.map((s, idx) => (
                    <li key={idx} onClick={() => onSelect(s)}>
                        {s.student}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default StudentList;
