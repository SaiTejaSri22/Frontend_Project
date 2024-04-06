// DetailsBlock.js
import React from "react";

const DetailsBlock = ({ student }) => {
  return (
    <div>
      {/* Your details block content here */}
      <h2>Details</h2>
      {/* Display student details */}
      <p>Name: {student.name}</p>
      {/* Display more details as per requirements */}
    </div>
  );
};

export default DetailsBlock;
