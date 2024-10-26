// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';

const App = () => {
    const [students, setStudents] = useState([]);

    // Fetch students from the API
    const fetchStudents = async () => {
        try {
            const response = await axios.get('https://mongodbcrud-backend.onrender.com/api/students');
            setStudents(response.data);
        } catch (error) {
            console.error('Error fetching students:', error);
        }
    };

    // Call fetchStudents when the component mounts
    useEffect(() => {
        fetchStudents();
    }, []);

    return (
        <div>
            <h1>Student Management</h1>
            <StudentForm onStudentAdded={fetchStudents} />
            <StudentList students={students} />
        </div>
    );
};

export default App;
