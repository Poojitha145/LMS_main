import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LeftOutlined } from '@ant-design/icons';
import './formStyles.css';

const AddAssignment = () => {
  const [assignment, setAssignment] = useState({ title: '', course: '', dueDate: '', description: '' });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAssignment({ ...assignment, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Assignment added:', assignment);
    setSuccessMessage('Assignment added successfully!');
    setAssignment({ title: '', course: '', dueDate: '', description: '' });
  };

  return (
    <div className="add-assignment-container">
      <h className="add-assignment-heading">Add New Assignment</h>
      {successMessage && <p className="add-assignment-success-message">{successMessage}</p>}
      <form onSubmit={handleSubmit} className="add-assignment-form">
        <input
          type="text"
          name="title"
          placeholder="Assignment Title"
          value={assignment.title}
          onChange={handleChange}
          className="add-assignment-input"
          required
        />
        <input
          type="text"
          name="course"
          placeholder="Associated Course"
          value={assignment.course}
          onChange={handleChange}
          className="add-assignment-input"
          required
        />
        <input
          type="date"
          name="dueDate"
          value={assignment.dueDate}
          onChange={handleChange}
          className="add-assignment-input"
          required
        />
        <textarea
          name="description"
          placeholder="Assignment Description"
          value={assignment.description}
          onChange={handleChange}
          className="add-assignment-input"
          required
        />
        <button type="submit" className="add-assignment-button">Add Assignment</button>
      </form>
      <Link to="/manage-assignments" className="add-assignment-back-link">
        <LeftOutlined /> Back
      </Link>
    </div>
  );
};

export default AddAssignment;
