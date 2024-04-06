// StatisticsBlock.js
import React from "react";
import { students } from "./data";
import "./styles.css";

const StatisticsBlock = () => {
  // Calculate statistics
  const totalStudents = students.length;
  const passedStudents = students.filter((student) => student.status === "P").length;
  const failedStudents = totalStudents - passedStudents;
  const averageExamGrade = students.reduce((sum, student) => sum + student.examGrade, 0) / totalStudents;
  const maxExamGrade = Math.max(...students.map(student => student.examGrade));
  const minExamGrade = Math.min(...students.map(student => student.examGrade));

  return (
    <div className="statistics-block">
      <h2>Statistics</h2>
      <p>Total Students: {totalStudents}</p>
      <p>Passed Students: {passedStudents}</p>
      <p>Failed Students: {failedStudents}</p>
      <p>Average Exam Grade: {averageExamGrade.toFixed(2)}</p>
      <p>Max Exam Grade: {maxExamGrade}</p>
      <p>Min Exam Grade: {minExamGrade}</p>
    </div>
  );
};

export default StatisticsBlock;
