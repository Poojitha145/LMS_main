import React, { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import { Link, Route, Routes } from 'react-router-dom';
import ManageCourses from './ManageCourses'; // Ensure this component is created
import ManageAssignments from './ManageAssignments'; // Ensure this component is created
import ManageGrades from './ManageGrades'; // Ensure this component is created
import { fetchCourses, fetchAssignments } from '../services/apiService'; // Import your API functions
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
  const [courses, setCourses] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [loadingCourses, setLoadingCourses] = useState(true);
  const [loadingAssignments, setLoadingAssignments] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const coursesResponse = await fetchCourses(); // Fetch courses from the API
        setCourses(coursesResponse.data); // Adjust based on your API response
        const assignmentsResponse = await fetchAssignments(); // Fetch assignments from the API
        setAssignments(assignmentsResponse.data); // Adjust based on your API response
      } catch (err) {
        setError('Failed to fetch data. Please try again later.');
      } finally {
        setLoadingCourses(false);
        setLoadingAssignments(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Welcome to Teacher Dashboard</h1>

      <h2>Your Courses</h2>
      {loadingCourses ? (
        <p>Loading courses...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
        <div className="course-cards">
          {courses.map(course => (
            <div className="card" key={course.id}>
              <div className="card-title">{course.title}</div>
              <p><strong>Description:</strong> {course.description}</p>
            </div>
          ))}
          <Link to="/manage-courses" className="view-all-link">Manage All Courses</Link>
        </div>
      )}

      <h2>Your Assignments</h2>
      {loadingAssignments ? (
        <p>Loading assignments...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
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
      )}
    </div>
  );
};

export default TeacherDashboard;
