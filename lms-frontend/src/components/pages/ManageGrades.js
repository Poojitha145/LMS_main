import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LeftOutlined } from '@ant-design/icons';
import { fetchGrades } from '../services/apiService'; // Import your API function
import './Manage.css';

const ManageGrades = () => {
  const [grades, setGrades] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchGrades(); // Fetch grades from the API
        setGrades(response.data); // Adjust based on your API response
      } catch (err) {
        setError('Failed to fetch grades. Please try again later.');
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
      <Link to="/add-grade" className="add-link">Add New Grade</Link>
      
      <h2>Manage Grades</h2>
      
      {loading ? (
        <p>Loading grades...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
        <div className="course-list">
          {grades.map(grade => (
            <div className="course-card" key={grade.id}>
              <h3>{grade.student}</h3>
              <p>Course: {grade.course}</p>
              <p>Grade: {grade.grade}</p>
              <Link to={`/edit-grade/${grade.id}`} className="edit-link">Edit Grade</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageGrades;
