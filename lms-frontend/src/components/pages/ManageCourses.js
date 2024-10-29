import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LeftOutlined } from '@ant-design/icons';
import { fetchCourses } from '../services/apiService'; // Import your API function
import './Manage.css';

const ManageCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchCourses(); // Fetch courses from the API
        setCourses(response.data); // Adjust based on your API response
      } catch (err) {
        setError('Failed to fetch courses. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="manage-courses-page">
      <Link to="/teacher-dashboard" className="back-link">
        <LeftOutlined /> Back
      </Link>
      <Link to="/add-course" className="add-link">Add New Course</Link>
      
      <h2>Manage Courses</h2>
      
      {loading ? (
        <p>Loading courses...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
        <div className="course-list">
          {courses.map(course => (
            <div className="course-card" key={course.id}>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <Link to={`/edit-course/${course.id}`} className="edit-link">Edit Course</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageCourses;
