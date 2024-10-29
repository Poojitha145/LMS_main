import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LeftOutlined } from '@ant-design/icons';
import './formStyles.css';

const AddCourse = () => {
  const [course, setCourse] = useState({ title: '', description: '' });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  const validateCourse = () => {
    if (course.title.length < 3) {
      setErrorMessage('Course title must be at least 3 characters long.');
      return false;
    }
    if (course.description.length < 10) {
      setErrorMessage('Course description must be at least 10 characters long.');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate course input
    if (!validateCourse()) return;

    console.log('Course added:', course);
    // Here you would typically send the course to your API
    setSuccessMessage('Course added successfully!');
    setErrorMessage(''); // Clear any previous error messages
    setCourse({ title: '', description: '' });

    // Optionally clear success message after a few seconds
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  return (
    <div className="add-course-container">
      <h2 className="add-course-heading">Add New Course</h2>
      {successMessage && <p className="add-course-success-message">{successMessage}</p>}
      {errorMessage && <p className="add-course-error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit} className="add-course-form">
        <label>
          Course Title:
          <input
            type="text"
            name="title"
            placeholder="Course Title"
            value={course.title}
            onChange={handleChange}
            className="add-course-input"
            required
          />
        </label>
        <label>
          Course Description:
          <textarea
            name="description"
            placeholder="Course Description"
            value={course.description}
            onChange={handleChange}
            className="add-course-input"
            required
          />
        </label>
        <button type="submit" className="add-course-button">Add Course</button>
      </form>
      <Link to="/manage-courses" className="add-course-back-link">
        <LeftOutlined /> Back
      </Link>
    </div>
  );
};

export default AddCourse;
