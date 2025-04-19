import React, { useEffect, useState } from 'react'
import './UserDashboard.css'
import CourseCard from '../components/CourseCard';

const UserDashboard = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("/course.json");
        const courses = await response.json();
        setCourses(courses);
      } catch (error) {
        console.error("Error fetching course data:", error);
      } finally {
        setLoading(false);
      }
    };
    
    getData();
  }, []);

  if (loading) return <div>Loading courses..</div>;
  if (!courses) return <div>Courses not found..</div>;

  return (
    <section id='user-dashboard' className='container'>
      <h1>Welcome to MODJAW&trade; Digital Academy</h1>
      <h2>Introducing 4D Dentistry to Digital Workflows</h2>
      <div className="course-grid">
        {courses.map((course) => (
          <CourseCard key={course.id} data={course} />
        ))}
      </div>
    </section>
  );
};

export default UserDashboard