import React from 'react';
import { Link } from 'react-router-dom';
import './CoursesPage.css';
import { LeftOutlined } from '@ant-design/icons';

const CoursesPage = () => {
  const courses = [
    { id: 1, title: 'Introduction to Programming', description: 'Basic programming concepts' },
    { id: 2, title: 'Data Structures and Algorithms', description: 'Core data structures' },
    { id: 3, title: 'Web Development Basics', description: 'Intro to HTML, CSS, and JS' },
    { id: 4, title: 'Database Management Systems', description: 'Designing and managing databases' },
    { id: 5, title: 'Operating Systems', description: 'Fundamentals of OS' },
    { id: 6, title: 'Networks', description: 'Basic networking concepts' },
    { id: 7, title: 'Artificial Intelligence', description: 'AI fundamentals' },
    { id: 8, title: 'Machine Learning', description: 'Supervised and unsupervised learning' },

  ];

  return (
    <div className="courses-page">
      <Link to="/student-dashboard" className="back-link"><LeftOutlined />Back</Link>
      <h2>All Courses</h2>
      <div className="course-list">
        {courses.map(course => (
          <div className="course-card" key={course.id}>
            <h3>Course name</h3>
            <p>{course.title}</p>
            <p style={{ fontWeight: 'bold' }}>Description</p>
            <p>{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
