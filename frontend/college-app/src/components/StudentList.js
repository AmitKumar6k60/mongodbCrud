// src/components/StudentList.js
import React from 'react';

const StudentList = ({ students }) => {
    return (
        <div>
            <h2>Student List</h2>
            <ul>
                {students.map((student) => (
                    <li key={student._id}>
                        {student.name} - {student.age} - {student.major} - {student.gpa}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StudentList;
