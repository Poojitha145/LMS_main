import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './CoursesPage.css';
import { LeftOutlined } from '@ant-design/icons';
import { fetchCourses } from '../services/apiService'; // Import your API function

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const response = await fetchCourses(); // Fetch courses from the API
        setCourses(response.data); // Adjust based on your API response
      } catch (err) {
        setError('Failed to fetch courses. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchCourseData();
  }, []);

  return (
    <div className="courses-page">
      <Link to="/student-dashboard" className="back-link"><LeftOutlined />Back</Link>
      <h2>All Courses</h2>
      {loading ? (
        <p>Loading courses...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
        <div className="course-list">
          {courses.map(course => (
            <div className="course-card" key={course.id}>
              <h3>{course.title}</h3>
              <p style={{ fontWeight: 'bold' }}>Description</p>
              <p>{course.description}</p>
              <Link to={`/courses/${course.id}`} className="view-details-link">View Details</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CoursesPage;
