import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './GradesPage.css';
import { LeftOutlined } from '@ant-design/icons';
import { fetchGrades } from '../services/apiService'; // Import your API function

const GradesPage = () => {
  const [grades, setGrades] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getGradeColor = (grade) => {
    if (grade === 'A+' || grade === 'A') return 'green';
    if (grade === 'A-' || grade === 'B+') return 'blue';
    if (grade === 'B') return 'orange';
    return 'red';
  };

  useEffect(() => {
    const fetchGradeData = async () => {
      try {
        const response = await fetchGrades(); // Fetch grades from the API
        setGrades(response.data); // Adjust based on your API response
      } catch (err) {
        setError('Failed to fetch grades. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchGradeData();
  }, []);

  return (
    <div className="grades-page">
      <Link to="/student-dashboard" className="back-link"><LeftOutlined />Back</Link>
      <h2>Your Grades</h2>
      {loading ? (
        <p>Loading grades...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
        <div className="grades-table">
          <div className="table-header">
            <div>Course</div>
            <div>Grade</div>
          </div>
          {grades.map((grade) => (
            <div className="table-row" key={grade.id}>
              <div className="row-title">{grade.title}</div>
              <div className="row-grade" style={{ color: getGradeColor(grade.grade) }}>
                {grade.grade}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GradesPage;
