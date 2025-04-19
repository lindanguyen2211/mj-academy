import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./Lesson.css";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Sidebar from "../components/Sidebar";

const Lesson = () => {
  const { courseId, lessonSlug } = useParams();
  const [lessonData, setLessonData] = useState(null);
  const [lessonNumber, setLessonNumber] = useState(null);
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lessonNavigation, setLessonNavigation] = useState({
    previous: null,
    next: null,
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch("/course.json");
        const courses = await response.json();
        const currentCourse = courses.find((c) => c.id === courseId);

        if (currentCourse) {
          setCourse(currentCourse);

          // Flatten all lessons with chapter info
          const allLessons = currentCourse.chapters.flatMap((chapter) =>
            chapter.lessons.map((lesson) => ({
              ...lesson,
              chapterNumber: chapter.chapter,
              chapterTitle: chapter.title,
            }))
          );

          // Find current lesson index
          const currentIndex = allLessons.findIndex(
            (l) => l.slug === lessonSlug
          );

          if (currentIndex !== -1) {
            setLessonData(allLessons[currentIndex]);
            setLessonNumber(currentIndex);
            setLessonNavigation({
              previous: currentIndex > 0 ? allLessons[currentIndex - 1] : null,
              next:
                currentIndex < allLessons.length - 1
                  ? allLessons[currentIndex + 1]
                  : null,
            });
          }
        }
      } catch (error) {
        console.error("Error loading lesson:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [courseId, lessonSlug]);

  if (loading)
    return <div className="lesson-loading">Loading lesson content...</div>;
  if (!lessonData)
    return <div className="lesson-error">Lesson content not found</div>;

  return (
    <section id="lessons">
      <Sidebar returnLink={`courses/${courseId}`} text="Course"/>
      <div className="lesson-container">
        <header className="lesson-header">
          <div className="lesson-header__left">
            <h1 className="lesson-title">
              Chapter {lessonData.chapterNumber}.{lessonNumber}:{" "}
              {lessonData.chapterTitle}
            </h1>
            <h2 className="lesson-subtitle">{lessonData.title}</h2>
          </div>

          <div className="lesson-header__right">
            <Link to={`/courses/${courseId}`} className="back-to-course">
              &lt; Back to Course
            </Link>
            <div className="lesson-progress">
              <IoMdCheckmarkCircleOutline
                className={`lesson-status ${
                  lessonData.status ? "completed" : "in-progress"
                }`}
              />
              {lessonData.status ? "COMPLETED" : "IN PROGRESS"}
            </div>
          </div>

        </header>

        <main className="lesson-content">
          {/* Add actual lesson content here */}
          <div className="lesson-body">
            <p>This is where your lesson content would be displayed.</p>
            <p>For this example, we'll show lesson metadata:</p>

            <div className="lesson-info-card">
              <h3>Lesson Details</h3>
              <ul>
                <li>Course ID: {courseId}</li>
                <li>Lesson Slug: {lessonSlug}</li>
                <li>Chapter: {lessonData.chapterNumber}</li>
                <li>
                  Status: {lessonData.status ? "Completed" : "In Progress"}
                </li>
              </ul>
            </div>
          </div>
        </main>

        <footer className="lesson-footer">
          <div className="lesson-navigation">
            {lessonNavigation.previous && (
              <Link
                to={`/courses/${courseId}/${lessonNavigation.previous.slug}`}
                className="nav-button previous"
              >
                &lt; Previous Lesson
              </Link>
            )}

            <div className="nav-spacer"></div>

            {lessonNavigation.next ? (
              <Link
                to={`/courses/${courseId}/${lessonNavigation.next.slug}`}
                className="nav-button next"
              >
                Next Lesson &gt;
              </Link>
            ) : (
              <Link to={`/courses/${courseId}`} className="nav-button finish">
                Complete Course
              </Link>
            )}
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Lesson;
