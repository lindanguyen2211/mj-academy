import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./Lesson.css";
import Sidebar from "../components/Sidebar";
import LessonContent from "../components/LessonContentRenderer";

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
            <h1 className="lesson-title">
              Chapter {lessonData.chapterNumber}: {lessonData.chapterTitle}
            </h1>
            <h2 className="lesson-subtitle">{lessonData.title}</h2>
        </header>

        <main className="lesson-content">
          {/* Add actual lesson content here */}
          <LessonContent content={lessonData["content"]}/>
        </main>

        <footer className="lesson-footer">
            {lessonNavigation.previous && (
              <Link
                to={`/courses/${courseId}/${lessonData.chapterNumber}/${lessonNavigation.previous.slug}`}
                className="nav-button previous"
              >
                &lt; Previous Lesson
              </Link>
            )}

            <div className="nav-spacer"></div>

            {lessonNavigation.next ? (
              <Link
                to={`/courses/${courseId}/${lessonData.chapterNumber}/${lessonNavigation.next.slug}`}
                className="nav-button next"
              >
                Next Lesson &gt;
              </Link>
            ) : (
              <Link to={`/courses/${courseId}`} className="nav-button finish">
                Complete Course
              </Link>
            )}
        </footer>
      </div>
    </section>
  );
};

export default Lesson;
