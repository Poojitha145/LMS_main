import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './CoursesPage.css';
import { LeftOutlined } from '@ant-design/icons';
import { fetchAssignments } from '../services/apiService'; // Import your API function

const AssignmentsPage = () => {
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAssignmentData = async () => {
      try {
        const response = await fetchAssignments(); // Fetch assignments from the API
        setAssignments(response.data); // Adjust based on your API response
      } catch (err) {
        setError('Failed to fetch assignments. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchAssignmentData();
  }, []);

  return (
    <div className="assignments-page">
      <Link to="/student-dashboard" className="back-link"><LeftOutlined />Back</Link>
      <h2>All Assignments</h2>
      {loading ? (
        <p>Loading assignments...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
        <div className="assignment-list">
          {assignments.map(assignment => (
            <div className="assignment-card" key={assignment.id}>
              <div className="card-title">{assignment.title}</div>
              <p><strong>Due Date:</strong> {assignment.dueDate}</p>
              <p><strong>Description:</strong> {assignment.description}</p>
              <Link to={`/assignments/${assignment.id}`} className="view-details-link">View Details</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AssignmentsPage;
