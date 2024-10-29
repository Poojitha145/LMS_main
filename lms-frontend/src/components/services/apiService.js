import axios from 'axios';

const API_URL = 'http://localhost:8081'; 

// User Registration
export const registerUser = (user) => axios.post(`${API_URL}/auth/register`, user);

// User Login
export const loginUser = (user) => axios.post(`${API_URL}/auth/login`, user);

// Fetch Courses (assuming this endpoint fetches all courses)
export const fetchCourses = () => axios.get(`${API_URL}/courses`); // Adjust the endpoint if needed

// Add a Course (for teacher role)
export const addCourse = (course) => axios.post(`${API_URL}/teacher/course`, course);

// Fetch Assignments for a specific course (you may need to pass course ID)
export const fetchAssignments = (courseId) => axios.get(`${API_URL}/teacher/assignments/${courseId}`); // Adjust based on your API

// Add Assignment
export const addAssignment = (assignment) => axios.post(`${API_URL}/teacher/assignment`, assignment);

// Fetch Grades for a student
export const fetchGrades = (studentId) => axios.get(`${API_URL}/students/grades/${studentId}`); // Adjust based on your API

// Add Grade
export const addGrade = (grade) => axios.post(`${API_URL}/teacher/grade`, grade);
