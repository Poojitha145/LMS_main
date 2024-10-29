import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LeftOutlined } from '@ant-design/icons';
import { fetchAssignments } from '../services/apiService'; // Import your API function
import './Manage.css';

const ManageAssignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchAssignments(); // Fetch assignments from the API
        setAssignments(response.data); // Adjust based on your API response
      } catch (err) {
        setError('Failed to fetch assignments. Please try again later.');
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
      <Link to="/add-assignment" className="add-link">Add New Assignment</Link>
      
      <h2>Manage Assignments</h2>

      {loading ? (
        <p>Loading assignments...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
        <div className="course-list">
          {assignments.map(assignment => (
            <div className="course-card" key={assignment.id}>
              <h3>{assignment.title}</h3>
              <p>Course: {assignment.course}</p>
              <p>Due Date: {assignment.dueDate}</p>
              <Link to={`/edit-assignment/${assignment.id}`} className="edit-link">Edit Assignment</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageAssignments;
