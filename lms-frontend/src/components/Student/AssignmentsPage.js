import React from 'react';
import { Link } from 'react-router-dom';
import './CoursesPage.css';
import { LeftOutlined } from '@ant-design/icons';

const AssignmentsPage = () => {
  const assignments = [
    { id: 1, title: 'Programming Fundamentals', dueDate: 'Oct 30, 2024', description: 'Exercises 1-10' },
    { id: 2, title: 'Algorithm Analysis', dueDate: 'Nov 5, 2024', description: 'Analyze algorithms' },
    { id: 3, title: 'HTML & CSS Basics', dueDate: 'Nov 12, 2024', description: 'Create webpage layout' },
    { id: 4, title: 'Database Project', dueDate: 'Nov 20, 2024', description: 'Design database schema' },
    { id: 5, title: 'Data Structures Quiz', dueDate: 'Nov 25, 2024', description: 'Complete quiz' },
    { id: 6, title: 'JavaScript Project', dueDate: 'Dec 2, 2024', description: 'Create a simple app' },
    { id: 7, title: 'Network Protocols Assignment', dueDate: 'Dec 9, 2024', description: 'Research protocols' },
  ];

  return (
    <div className="courses-page">
      <Link to="/student-dashboard" className="back-link"><LeftOutlined />Back</Link>
      <h2>All Assignments</h2>
      <div className="course-list">
        {assignments.map(assignment => (
          <div className="course-card" key={assignment.id}>
            <div className="card-title">{assignment.title}</div>
            <p><strong>Due Date:</strong> {assignment.dueDate}</p>
            <p><strong>Description:</strong> {assignment.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssignmentsPage;
