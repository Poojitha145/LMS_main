import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, Route, Routes } from 'react-router-dom';
import CoursesPage from './CoursesPage';
import AssignmentsPage from './AssignmentsPage';
import GradesPage from './GradesPage';
import './StudentDashboard.css';
import { RightOutlined } from '@ant-design/icons';

const { Header, Content } = Layout;

const StudentDashboard = () => {
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
          <Route path="/" element={<DashboardContent />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/assignments" element={<AssignmentsPage />} />
          <Route path="/grades" element={<GradesPage />} />
        </Routes>
      </Content>
    </Layout>
  );
};

const DashboardContent = () => (
  <div>
    <h1>Welcome to Student Dashboard</h1>

    <section className="section">
      <h2>Courses</h2>
      <div className="course-cards">
        <div className="card">
          <div className="card-title">Course 1</div>
          <p>Introduction to Programming</p>
          <p><strong>Description:</strong> Basic introduction to Programming</p>
        </div>
        <div className="card">
          <div className="card-title">Course 2</div>
          <p>Data Structures and Algorithms</p>
          <p><strong>Description:</strong> Introduction to Data Structures and Algorithms</p>
        </div>
        <div className="card">
          <div className="card-title">Course 3</div>
          <p>Web Development Basics</p>
          <p><strong>Description:</strong> Introduction to Web Development</p>
        </div>
        <div className="card">
          <div className="card-title">Course 4</div>
          <p>Database Management Systems</p>
          <p><strong>Description:</strong> Introduction to DBMS</p>
        </div>
      </div>
      <Link to="/courses" className="view-all-link">View All <RightOutlined /></Link>
    </section>

    <section className="section">
      <h2>Assignments</h2>
      <div className="assignment-cards">
        <div className="card">
          <div className="card-title">Assignment 1</div>
          <p>Programming Fundamentals</p>
          <p><strong>Due Date:</strong> Oct 30, 2024</p>
          <p>Complete exercises 1-10 from the textbook</p>
        </div>
        <div className="card">
          <div className="card-title">Assignment 2</div>
          <p>Algorithm Analysis</p>
          <p><strong>Due Date:</strong> Nov 5, 2024</p>
          <p>Analyze and optimize the given algorithm samples</p>
        </div>
        <div className="card">
          <div className="card-title">Assignment 3</div>
          <p>HTML & CSS Basics</p>
          <p><strong>Due Date:</strong> Nov 12, 2024</p>
          <p>Create a basic webpage layout using HTML & CSS</p>
        </div>
        <div className="card">
          <div className="card-title">Assignment 4</div>
          <p>Database Project</p>
          <p><strong>Due Date:</strong> Nov 20, 2024</p>
          <p>Design a simple database schema for a library system</p>
        </div>
      </div>
      <Link to="/assignments" className="view-all-link">View All <RightOutlined /></Link>
    </section>
  </div>
);

export default StudentDashboard;
