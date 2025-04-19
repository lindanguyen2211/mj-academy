import React from "react";
import "./Landing.css";
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/dashboard">User Dashboard</Link>
        </li>
        <li>
          <Link to="/courses/course-1">Getting Started</Link>
          </li>
        <li>
          <Link to="/courses/exam">Exam</Link>
        </li>
        <li>
          <Link path="/certificates">Certificates</Link>
        </li>
        <li>
          <Link path="/library">Library</Link>
        </li>
      </ul>
    </div>
  );
};

export default Landing;
