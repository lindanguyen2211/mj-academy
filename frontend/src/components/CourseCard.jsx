import React from "react";
import "./CourseCard.css";

const CourseCard = (data) => {
  const { courseID, title, imgURL, tag, description, lessons } = data.data;

  const getCount = lessons.filter((lesson) => lesson.completed).length;
  const progress = (getCount / lessons.length) * 100;

  console.log(progress);

  return (
    <li className="courseCard">
      <div className="card_imgWrapper">
        <img src="" alt="" className="card_img" />
        <p className={`${tag} tag`}>{tag}</p>
      </div>
      <div className="card_courseContent">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="progressBar">
        <div
          className="progressFill"
          style={{
            width: `${progress}%`
          }}
        ></div>
      </div>{" "}
    </li>
  );
};

export default CourseCard;
