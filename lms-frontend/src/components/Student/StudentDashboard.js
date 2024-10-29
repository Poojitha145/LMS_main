import React, { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import { Link, Route, Routes } from 'react-router-dom';
import CoursesPage from './CoursesPage';
import AssignmentsPage from './AssignmentsPage';
import GradesPage from './GradesPage';
import { fetchCourses, fetchAssignments } from '../services/apiService'; // Import the API functions
import './StudentDashboard.css';
import { RightOutlined } from '@ant-design/icons';

const { Header, Content } = Layout;

const StudentDashboard = () => {
  const [courses, setCourses] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [loadingCourses, setLoadingCourses] = useState(true);
  const [loadingAssignments, setLoadingAssignments] = useState(true);

  // Fetch courses and assignments
  useEffect(() => {
    const getCourses = async () => {
      try {
        const response = await fetchCourses();
        setCourses(response.data); // Adjust based on your API response
      } catch (error) {
        console.error('Error fetching courses:', error);
      } finally {
        setLoadingCourses(false);
      }
    };

    const getAssignments = async () => {
      try {
        const response = await fetchAssignments();
        setAssignments(response.data); // Adjust based on your API response
      } catch (error) {
        console.error('Error fetching assignments:', error);
      } finally {
        setLoadingAssignments(false);
      }
    };

    getCourses();
    getAssignments();
  }, []);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header className="header">
        <div className="logo" />
        <Menu mode="horizontal" className="menu">
          <Menu.Item key="auth">
            <Link to="/auth" className="menu-item">Login/Register</Link>
          </Menu.Item>
          <Menu.Item key="courses">
            <Link to="/courses" className="menu-item">Courses</Link>
          </Menu.Item>
          <Menu.Item key="assignments">
            <Link to="/assignments" className="menu-item">Assignments</Link>
          </Menu.Item>
          <Menu.Item key="grades">
            <Link to="/grades" className="menu-item">Grades</Link>
          </Menu.Item>
        </Menu>
      </Header>

      <Content className="content">
        <Routes>
          <Route path="/" element={<DashboardContent courses={courses} assignments={assignments} loadingCourses={loadingCourses} loadingAssignments={loadingAssignments} />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/assignments" element={<AssignmentsPage />} />
          <Route path="/grades" element={<GradesPage />} />
        </Routes>
      </Content>
    </Layout>
  );
};

const DashboardContent = ({ courses, assignments, loadingCourses, loadingAssignments }) => (
  <div>
    <h1>Welcome to Student Dashboard</h1>

    <section className="section">
      <h2>Courses</h2>
      {loadingCourses ? (
        <p>Loading courses...</p>
      ) : (
        <div className="course-cards">
          {courses.map((course, index) => (
            <div key={index} className="card">
              <div className="card-title">{course.title}</div>
              <p>{course.description}</p>
            </div>
          ))}
        </div>
      )}
      <Link to="/courses" className="view-all-link">View All <RightOutlined /></Link>
    </section>

    <section className="section">
      <h2>Assignments</h2>
      {loadingAssignments ? (
        <p>Loading assignments...</p>
      ) : (
        <div className="assignment-cards">
          {assignments.map((assignment, index) => (
            <div key={index} className="card">
              <div className="card-title">{assignment.title}</div>
              <p><strong>Due Date:</strong> {assignment.dueDate}</p>
              <p>{assignment.description}</p>
            </div>
          ))}
        </div>
      )}
      <Link to="/assignments" className="view-all-link">View All <RightOutlined /></Link>
    </section>
  </div>
);

export default StudentDashboard;
