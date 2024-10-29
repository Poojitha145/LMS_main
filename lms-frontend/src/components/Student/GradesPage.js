import React from 'react';
import { Link } from 'react-router-dom';
import './GradesPage.css';
import { LeftOutlined } from '@ant-design/icons';

const GradesPage = () => {
  const grades = [
    { id: 1, title: 'Programming Fundamentals', grade: 'A' },
    { id: 2, title: 'Data Structures', grade: 'B+' },
    { id: 3, title: 'Web Development', grade: 'A-' },
    { id: 4, title: 'Database Management', grade: 'B' },
    { id: 5, title: 'Operating Systems', grade: 'A+' },
    { id: 6, title: 'Networks', grade: 'B-' },
    { id: 7, title: 'Artificial Intelligence', grade: 'A' },
  ];

  const getGradeColor = (grade) => {
    if (grade === 'A+' || grade === 'A') return 'green';
    if (grade === 'A-' || grade === 'B+') return 'blue';
    if (grade === 'B') return 'orange';
    return 'red';
  };

  return (
    <div className="grades-page">
      <Link to="/student-dashboard" className="back-link"><LeftOutlined />Back</Link>
      <h2>Your Grades</h2>
      <div className="grades-table">
        <div className="table-header">
          <div >Course</div>
          <div >Grade</div>
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
    </div>
  );
};

export default GradesPage;
