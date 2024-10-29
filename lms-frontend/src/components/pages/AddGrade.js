import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LeftOutlined } from '@ant-design/icons';
import './formStyles.css';

const AddGrade = () => {
  const [grade, setGrade] = useState({ studentId: '', course: '', assignment: '', grade: '' });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGrade({ ...grade, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Grade added:', grade);
    setSuccessMessage('Grade added successfully!');
    setGrade({ studentId: '', course: '', assignment: '', grade: '' });
  };

  return (
    <div className="add-grade-container">
      <h className="add-grade-heading">Add New Grade</h>
      {successMessage && <p className="add-grade-success-message">{successMessage}</p>}
      <form onSubmit={handleSubmit} className="add-grade-form">
        <input
          type="text"
          name="studentId"
          placeholder="Student ID"
          value={grade.studentId}
          onChange={handleChange}
          className="add-grade-input"
          required
        />
        <input
          type="text"
          name="course"
          placeholder="Course"
          value={grade.course}
          onChange={handleChange}
          className="add-grade-input"
          required
        />
        <input
          type="text"
          name="assignment"
          placeholder="Assignment"
          value={grade.assignment}
          onChange={handleChange}
          className="add-grade-input"
          required
        />
        <input
          type="number"
          name="grade"
          placeholder="Grade"
          value={grade.grade}
          onChange={handleChange}
          className="add-grade-input"
          required
        />
        <button type="submit" className="add-grade-button">Add Grade</button>
      </form>
      <Link to="/manage-grades" className="add-grade-back-link">
        <LeftOutlined /> Back
      </Link>
    </div>
  );
};

export default AddGrade;
