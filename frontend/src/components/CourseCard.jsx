// CourseCard.js
import React from "react";
import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import "./CourseCard.css";

const CourseCard = ({ data }) => {
  // Calculate progress
  const totalLessons = data.chapters.reduce(
    (acc, chapter) => acc + chapter.lessons.length,
    0
  );
  const completedLessons = data.chapters.reduce(
    (acc, chapter) =>
      acc + chapter.lessons.filter((lesson) => lesson.status).length,
    0
  );
  const progress =
    totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

  return (
    <div className="course-card">
      <img
        src={`/${data.img}`}
        alt={data.courseTitle}
        className="course-card__left"
      />
      <div className="course-card__right">
        <div className="top">
          <h3>{data.courseTitle}</h3>
          <p className="course-overview">
            {data.overview}
          </p>
        </div>
        <div className="bottom">
          <button>
            <Link
              to={`/courses/${data.id}`}
              className={`course-link ${progress === 100 ? "completed" : ""}`}
              >
              {progress === 100 ? "Review" : "Continue"}
            </Link>
          </button>
          <ProgressBar progress={progress} />
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
