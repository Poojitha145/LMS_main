import axios from 'axios';

const API_URL = 'http://localhost:8081'; // Adjust URL if needed

export const registerUser = (user) => axios.post(`${API_URL}/auth/register`, user);
export const loginUser = (user) => axios.post(`${API_URL}/auth/login`, user);
export const fetchCourses = () => axios.get(`${API_URL}/students/courses`);
export const addCourse = (course) => axios.post(`${API_URL}/teacher/course`, course);
export const fetchAssignments = () => axios.get(`${API_URL}/teacher/getallassignments`);
export const addAssignment = (assignment) => axios.post(`${API_URL}/teacher/assignment`, assignment);
export const fetchGrades = () => axios.get(`${API_URL}/students/grades`);
export const addGrade = (grade) => axios.post(`${API_URL}/teacher/grade`, grade);
