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

// Private Route Component
const PrivateRoute = ({ element, allowedRoles }) => {
  const user = JSON.parse(localStorage.getItem(localStorage.getItem('loggedInUser')));
  
  return allowedRoles.includes(user?.role) ? element : <Navigate to="/auth" />;
};

const App = () => {
  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <Navigate to={localStorage.getItem('loggedInUser') 
            ? (JSON.parse(localStorage.getItem(localStorage.getItem('loggedInUser'))).role === 'teacher' 
              ? "/teacher-dashboard" 
              : "/student-dashboard") 
            : "/auth"} 
          />
        } 
      />
      <Route path="/auth" element={<Auth />} />

      <Route path="/teacher-dashboard" element={<PrivateRoute element={<TeacherDashboard />} allowedRoles={['teacher']} />} />
      <Route path="/manage-courses" element={<PrivateRoute element={<ManageCourses />} allowedRoles={['teacher']} />} />
      <Route path="/manage-assignments" element={<PrivateRoute element={<ManageAssignments />} allowedRoles={['teacher']} />} />
      <Route path="/manage-grades" element={<PrivateRoute element={<ManageGrades />} allowedRoles={['teacher']} />} />
      <Route path="/add-grade" element={<PrivateRoute element={<AddGrade />} allowedRoles={['teacher']} />} />
      <Route path="/add-course" element={<PrivateRoute element={<AddCourse />} allowedRoles={['teacher']} />} />
      <Route path="/add-assignment" element={<PrivateRoute element={<AddAssignment />} allowedRoles={['teacher']} />} />
      <Route path="/student-dashboard" element={<PrivateRoute element={<StudentDashboard />} allowedRoles={['student']} />} />
      <Route path="/courses" element={<PrivateRoute element={<CoursesPage />} allowedRoles={['student']} />} />
      <Route path="/assignments" element={<PrivateRoute element={<AssignmentsPage />} allowedRoles={['student']} />} />
      <Route path="/grades" element={<PrivateRoute element={<GradesPage />} allowedRoles={['student']} />} />

      <Route path="*" element={<Navigate to="/auth" />} />
    </Routes>
  );
};

export default App;
