import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Sidebar.css";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Sidebar = (props) => {
    const {returnLink, text} = props
  const { courseId } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const logo = new URL("../assets/images/MODJAW_Logo.png", import.meta.url).href;

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const response = await fetch("/course.json");
        const courses = await response.json();
        const selectedCourse = courses.find(c => c.id === courseId);
        setCourseData(selectedCourse);
      } catch (error) {
        console.error("Error fetching course data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourseData();
  }, [courseId]);

  if (loading) return <div className="sidebar-loading">Loading course...</div>;
  if (!courseData) return <div className="sidebar-error">Course data not available</div>;

  return (
    <aside className="course-sidebar">
      <Link to={`/${returnLink}`} className="white course-sidebar-return">
        &lt; Back to {text}
      </Link>
      <img src={logo} alt="modjaw logo" className="sidebar-logo" />

      {courseData.chapters.map((chapter, index) => (
        <div key={index}>
          <p className="chapter-title">
            {`${chapter.chapter}: ${chapter.title}`}
          </p>
          {chapter.lessons.map((lesson, lessonIndex) => (
            <p className="lesson" key={lessonIndex}>
              <IoMdCheckmarkCircleOutline 
                className={`lesson-status ${lesson.status ? "completed" : "in-progress"}`}
              />
              <Link to={`/courses/${courseId}/${chapter.chapter}/${lesson.slug}`}>
                {`${chapter.chapter}.${lessonIndex + 1} ${lesson.title}`}
              </Link>
            </p>
          ))}
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;