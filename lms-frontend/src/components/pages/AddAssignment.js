import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LeftOutlined } from '@ant-design/icons';
import './formStyles.css';

const AddAssignment = () => {
  const [assignment, setAssignment] = useState({ title: '', course: '', dueDate: '', description: '' });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAssignment({ ...assignment, [name]: value });
  };

  const validateAssignment = () => {
    if (assignment.title.length < 3) {
      setErrorMessage('Assignment title must be at least 3 characters long.');
      return false;
    }
    if (assignment.course.length < 3) {
      setErrorMessage('Course name must be at least 3 characters long.');
      return false;
    }
    if (assignment.description.length < 10) {
      setErrorMessage('Assignment description must be at least 10 characters long.');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate assignment input
    if (!validateAssignment()) return;

    console.log('Assignment added:', assignment);
    // Here you would typically send the assignment to your API
    setSuccessMessage('Assignment added successfully!');
    setErrorMessage(''); // Clear any previous error messages
    setAssignment({ title: '', course: '', dueDate: '', description: '' });

    // Optionally clear success message after a few seconds
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  return (
    <div className="add-assignment-container">
      <h2 className="add-assignment-heading">Add New Assignment</h2>
      {successMessage && <p className="add-assignment-success-message">{successMessage}</p>}
      {errorMessage && <p className="add-assignment-error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit} className="add-assignment-form">
        <label>
          Assignment Title:
          <input
            type="text"
            name="title"
            placeholder="Assignment Title"
            value={assignment.title}
            onChange={handleChange}
            className="add-assignment-input"
            required
          />
        </label>
        <label>
          Associated Course:
          <input
            type="text"
            name="course"
            placeholder="Associated Course"
            value={assignment.course}
            onChange={handleChange}
            className="add-assignment-input"
            required
          />
        </label>
        <label>
          Due Date:
          <input
            type="date"
            name="dueDate"
            value={assignment.dueDate}
            onChange={handleChange}
            className="add-assignment-input"
            required
          />
        </label>
        <label>
          Assignment Description:
          <textarea
            name="description"
            placeholder="Assignment Description"
            value={assignment.description}
            onChange={handleChange}
            className="add-assignment-input"
            required
          />
        </label>
        <button type="submit" className="add-assignment-button">Add Assignment</button>
      </form>
      <Link to="/manage-assignments" className="add-assignment-back-link">
        <LeftOutlined /> Back
      </Link>
    </div>
  );
};

export default AddAssignment;
