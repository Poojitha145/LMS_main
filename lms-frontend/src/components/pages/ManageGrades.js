

import React from 'react';
import { Link } from 'react-router-dom';
import './Manage.css';
import { LeftOutlined } from '@ant-design/icons';

const ManageGrades = () => {
  const grades = [
    { id: 1, student: 'John Doe', course: 'Programming Fundamentals', grade: 'A' },
    { id: 2, student: 'Jane Smith', course: 'Algorithm Analysis', grade: 'B+' },
    { id: 3, student: 'Emily Johnson', course: 'HTML & CSS Basics', grade: 'A-' },
    { id: 4, student: 'Michael Brown', course: 'Database Project', grade: 'C' },
  ];

  return (
    <div className="manage-courses-page">
          <Link to="/teacher-dashboard" className="back-link"><LeftOutlined/>Back</Link>
          <Link to="/add-grade" className="add-link">Add New Grade</Link>
      <h2>Manage Grades</h2>
      <div className="course-list">
        {grades.map(grade => (
          <div className="course-card" key={grade.id}>
            <h3>{grade.student}</h3>
            <p>Course: {grade.course}</p>
            <p>Grade: {grade.grade}</p>
            <Link to={`/edit-grade/${grade.id}`} className="edit-link">Edit Grade</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageGrades;
