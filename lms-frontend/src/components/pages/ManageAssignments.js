// ManageAssignments.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Manage.css';
import { LeftOutlined } from '@ant-design/icons';
const ManageAssignments = () => {
  const assignments = [
    { id: 1, title: 'Assignment 1', course: 'Programming Fundamentals', dueDate: 'Oct 30, 2024' },
    { id: 2, title: 'Assignment 2', course: 'Algorithm Analysis', dueDate: 'Nov 5, 2024' },
    { id: 3, title: 'Assignment 3', course: 'HTML & CSS Basics', dueDate: 'Nov 12, 2024' },
    { id: 4, title: 'Assignment 4', course: 'Database Project', dueDate: 'Nov 20, 2024' },
  ];

  return (
    <div className="manage-courses-page">
            <Link to="/teacher-dashboard" className="back-link"><LeftOutlined/>Back</Link>
            <Link to="/add-assignment" className="add-link">Add New Assignment</Link>
      <h2>Manage Assignments</h2>
      <div className="course-list">
        {assignments.map(assignment => (
          <div className="course-card" key={assignment.id}>
            <h3>{assignment.title}</h3>
            <p>Course: {assignment.course}</p>
            <p>Due Date: {assignment.dueDate}</p>
            <Link to={`/edit-assignment/${assignment.id}`} className="edit-link">Edit Assignment</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageAssignments;
