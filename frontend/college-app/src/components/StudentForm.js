// src/components/StudentForm.js
import React, { useState } from 'react';
import axios from 'axios';

const StudentForm = ({ onStudentAdded }) => {
    const [student, setStudent] = useState({ name: '', age: '', major: '', enrollment_date: '', gpa: '' });

    const handleChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5001/api/students', student);
            alert('Student added successfully');
            setStudent({ name: '', age: '', major: '', enrollment_date: '', gpa: '' });
            onStudentAdded(); // Trigger the refresh after adding
        } catch (error) {
            console.error('Error adding student:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={student.name} onChange={handleChange} placeholder="Name" required />
            <input name="age" type="number" value={student.age} onChange={handleChange} placeholder="Age" required />
            <input name="major" value={student.major} onChange={handleChange} placeholder="Major" required />
            <input name="enrollment_date" type="date" value={student.enrollment_date} onChange={handleChange} required />
            <input name="gpa" type="number" step="0.01" value={student.gpa} onChange={handleChange} placeholder="GPA" required />
            <button type="submit">Add Student</button>
        </form>
    );
};

export default StudentForm;
