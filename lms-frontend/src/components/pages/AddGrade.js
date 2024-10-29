import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LeftOutlined } from '@ant-design/icons';
import './formStyles.css';

const AddGrade = () => {
  const [grade, setGrade] = useState({ studentId: '', course: '', assignment: '', grade: '' });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGrade({ ...grade, [name]: value });
  };

  const validateGrade = (grade) => {
    const numericGrade = Number(grade);
    return !isNaN(numericGrade) && numericGrade >= 0 && numericGrade <= 100;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate grade
    if (!validateGrade(grade.grade)) {
      setErrorMessage('Grade must be a number between 0 and 100.');
      return;
    }

    console.log('Grade added:', grade);
    // Here you would typically send the grade to your API
    setSuccessMessage('Grade added successfully!');
    setErrorMessage(''); // Clear any previous error messages
    setGrade({ studentId: '', course: '', assignment: '', grade: '' });
  };

  return (
    <div className="add-grade-container">
      <h2 className="add-grade-heading">Add New Grade</h2>
      {successMessage && <p className="add-grade-success-message">{successMessage}</p>}
      {errorMessage && <p className="add-grade-error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit} className="add-grade-form">
        <label>
          Student ID:
          <input
            type="text"
            name="studentId"
            placeholder="Student ID"
            value={grade.studentId}
            onChange={handleChange}
            className="add-grade-input"
            required
          />
        </label>
        <label>
          Course:
          <input
            type="text"
            name="course"
            placeholder="Course"
            value={grade.course}
            onChange={handleChange}
            className="add-grade-input"
            required
          />
        </label>
        <label>
          Assignment:
          <input
            type="text"
            name="assignment"
            placeholder="Assignment"
            value={grade.assignment}
            onChange={handleChange}
            className="add-grade-input"
            required
          />
        </label>
        <label>
          Grade:
          <input
            type="number"
            name="grade"
            placeholder="Grade"
            value={grade.grade}
            onChange={handleChange}
            className="add-grade-input"
            required
          />
        </label>
        <button type="submit" className="add-grade-button">Add Grade</button>
      </form>
      <Link to="/manage-grades" className="add-grade-back-link">
        <LeftOutlined /> Back
      </Link>
    </div>
  );
};

export default AddGrade;
