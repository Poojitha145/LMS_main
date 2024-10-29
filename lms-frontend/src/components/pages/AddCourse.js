import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LeftOutlined } from '@ant-design/icons';
import './formStyles.css';

const AddCourse = () => {
  const [course, setCourse] = useState({ title: '', description: '' });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Course added:', course);
    setSuccessMessage('Course added successfully!');
    setCourse({ title: '', description: '' });
  };

  return (
    <div className="add-course-container">
      <h className="add-course-heading">Add New Course</h>
      {successMessage && <p className="add-course-success-message">{successMessage}</p>}
      <form onSubmit={handleSubmit} className="add-course-form">
        <input
          type="text"
          name="title"
          placeholder="Course Title"
          value={course.title}
          onChange={handleChange}
          className="add-course-input"
          required
        />
        <textarea
          name="description"
          placeholder="Course Description"
          value={course.description}
          onChange={handleChange}
          className="add-course-input"
          required
        />
        <button type="submit" className="add-course-button">Add Course</button>
      </form>
      <Link to="/manage-courses" className="add-course-back-link">
        <LeftOutlined /> Back
      </Link>
    </div>
  );
};

export default AddCourse;
