// TeacherDashboard.js

import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, Route, Routes } from 'react-router-dom';
import ManageCourses from './ManageCourses'; // Ensure this component is created
import ManageAssignments from './ManageAssignments'; // Ensure this component is created
import ManageGrades from './ManageGrades'; // Ensure this component is created
import './TeacherDashboard.css';

const { Header, Content } = Layout;

const TeacherDashboard = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header className="header">
        <div className="logo" />
        <Menu mode="horizontal" className="menu">
          <Menu.Item key="auth">
            <Link to="/auth" className="menu-item">Login/Register</Link>
          </Menu.Item>
          <Menu.Item key="manage-courses">
            <Link to="/manage-courses" className="menu-item">Manage Courses</Link>
          </Menu.Item>
          <Menu.Item key="manage-assignments">
            <Link to="/manage-assignments" className="menu-item">Manage Assignments</Link>
          </Menu.Item>
          <Menu.Item key="manage-grades">
            <Link to="/manage-grades" className="menu-item">Manage Grades</Link>
          </Menu.Item>
        </Menu>
      </Header>

      <Content className="content">
        <Routes>
          <Route path="/" element={<DashboardContent />} />
          <Route path="/manage-courses" element={<ManageCourses />} />
          <Route path="/manage-assignments" element={<ManageAssignments />} />
          <Route path="/manage-grades" element={<ManageGrades />} />
        </Routes>
      </Content>
    </Layout>
  );
};

const DashboardContent = () => {
  // Hardcoded courses for the teacher
  const courses = [
    { id: 1, title: 'Introduction to Programming', description: 'Basic programming concepts' },
    { id: 2, title: 'Data Structures and Algorithms', description: 'Core data structures' },
    { id: 3, title: 'Web Development Basics', description: 'Intro to HTML, CSS, and JS' },
    { id: 4, title: 'Database Management Systems', description: 'Designing and managing databases' },
  ];

  // Hardcoded assignments for the teacher
  const assignments = [
    { id: 1, title: 'Programming Fundamentals', dueDate: 'Oct 30, 2024', description: 'Exercises 1-10' },
    { id: 2, title: 'Algorithm Analysis', dueDate: 'Nov 5, 2024', description: 'Analyze algorithms' },
    { id: 3, title: 'HTML & CSS Basics', dueDate: 'Nov 12, 2024', description: 'Create webpage layout' },
    { id: 4, title: 'Database Project', dueDate: 'Nov 20, 2024', description: 'Design database schema' },
  ];

  return (
    <div>
      <h1>Welcome to Teacher Dashboard</h1>
      
      <h2>Your Courses</h2>
      <div className="course-cards">
        {courses.map(course => (
          <div className="card" key={course.id}>
            <div className="card-title">{course.title}</div>
            <p><strong>Description:</strong> {course.description}</p>
          </div>
        ))}
        <Link to="/manage-courses" className="view-all-link">Manage All Courses</Link>
      </div>

      <h2>Your Assignments</h2>
      <div className="assignment-cards">
        {assignments.map(assignment => (
          <div className="card" key={assignment.id}>
            <div className="card-title">{assignment.title}</div>
            <p><strong>Due Date:</strong> {assignment.dueDate}</p>
            <p><strong>Description:</strong> {assignment.description}</p>
          </div>
        ))}
        <Link to="/manage-assignments" className="view-all-link">Manage All Assignments</Link>
      </div>
    </div>
  );
};

export default TeacherDashboard;
