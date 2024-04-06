// MainBlock.js
import React from "react";
import "./styles.css"; // Import CSS file

const MainBlock = ({ students }) => {
  return (
    <div className="main-block"> {/* Add class name */}
      {/* Your main block content here */}
      <table>
        {/* Table headers */}
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Ticket Number</th>
            <th>Rating Grade</th>
            <th>Exam Grade</th>
            <th>Final Grade</th>
            <th>Status</th>
            {/* Add more headers as per requirements */}
          </tr>
        </thead>
        {/* Table body with student data */}
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id}>
              <td>{index + 1}</td>
              <td>{student.name}</td>
              <td>{student.ticketNumber}</td>
              <td>{student.ticketTopic}</td>
              <td>{student.examGrade}</td>
              <td>{student.ratingGrade}</td>
              <td>{student.status}</td>
              {/* Render more data as per requirements */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MainBlock;
