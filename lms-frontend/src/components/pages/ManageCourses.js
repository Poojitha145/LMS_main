// ManageCourses.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Manage.css';
import { LeftOutlined } from '@ant-design/icons';
const ManageCourses = () => {
  const courses = [
    { id: 1, title: 'Introduction to Programming', description: 'Basic programming concepts' },
    { id: 2, title: 'Data Structures', description: 'Understanding data structures and their applications' },
    { id: 3, title: 'Web Development', description: 'Building modern web applications' },
    { id: 4, title: 'Database Management', description: 'Managing databases effectively' },
  ];

  return (
    <div className="manage-courses-page">
        <Link to="/teacher-dashboard" className="back-link"><LeftOutlined/>Back</Link>
        <Link to="/add-course" className="add-link">Add New Course</Link>
      <h2>Manage Courses</h2>
      <div className="course-list">
        {courses.map(course => (
          <div className="course-card" key={course.id}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <Link to={`/edit-course/${course.id}`} className="edit-link">Edit Course</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageCourses;
