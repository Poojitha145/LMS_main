import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import StudentDashboard from './components/Student/StudentDashboard';
import TeacherDashboard from './components/pages/TeacherDashboard';
import Auth from './components/Auth/Auth';
import ManageAssignments from './components/pages/ManageAssignments';
import ManageCourses from './components/pages/ManageCourses';
import ManageGrades from './components/pages/ManageGrades';
import AddGrade from './components/pages/AddGrade';
import AddCourse from './components/pages/AddCourse';
import AddAssignment from './components/pages/AddAssignment';
import CoursesPage from './components/Student/CoursesPage';
import AssignmentsPage from './components/Student/AssignmentsPage';
import GradesPage from './components/Student/GradesPage';

const App = () => {
  const getUserData = () => {
    const username = localStorage.getItem('loggedInUser');
    return username ? JSON.parse(localStorage.getItem(username)) : null;
  };

  const user = getUserData();

  return (
    <Routes>
      <Route path="/" element={<Navigate to={user ? (user.role === 'teacher' ? "/teacher-dashboard" : "/student-dashboard") : "/auth"} />} />

      <Route path="/auth" element={<Auth />} />
      
      <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
      <Route path="/manage-courses" element={<ManageCourses />} />
      <Route path="/manage-assignments" element={<ManageAssignments />} />
      <Route path="/manage-grades" element={<ManageGrades />} />
      <Route path="/add-grade" element={<AddGrade />} />
      <Route path="/add-course" element={<AddCourse />} />
      <Route path="/add-assignment" element={<AddAssignment />} />
      <Route path="/student-dashboard" element={<StudentDashboard />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/assignments" element={<AssignmentsPage />} />
      <Route path="/grades" element={<GradesPage />} />

      <Route path="*" element={<Navigate to="/auth" />} />
    </Routes>
  );
};

export default App;
