import React, { useEffect, useState } from 'react'
import './CourseDashboard.css'
import { useParams, Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const CourseDashboard = () => {
  const profile = new URL("../assets/images/profile-picture.png", import.meta.url).href
  const icon = new URL("../assets/images/pc-icon.png", import.meta.url).href
  const { courseId } = useParams()

  // initialize data state and fetch data from json
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("/course.json")
        const courses = await response.json()
        const selectedCourse = courses.find(c => c.id === courseId)
        setCourse(selectedCourse)
      } catch (error) {
        console.error("Error fetching course data:", error)
      } finally {
        setLoading(false)
      }
    }
    
    getData()
  }, [courseId])

  if (loading) return <div>Loading course...</div>
  if (!course) return <div>Course not found</div>

    // Get first lesson slug for "Begin Course" button
    const firstLessonSlug = course.chapters[0]?.lessons[0]?.slug

  return (
    <section id='courses'>
      <Sidebar returnLink="dashboard" text="Dashboard"/>
      <section className='main'>
        <header>
          <div className='profile'>
            <img src={profile} alt="profile picture" className="profile-picture" />
            <div>
              <p className='welcome-message'>WELCOME BACK, TAYLOR</p>
              <div className="progress">
                <img src={icon} alt="icon of a computer" className='pc-icon'/>
                <p>100% COMPLETE</p>
              </div>
            </div>
          </div>
          <Link to={`/lessons/${courseId}/${firstLessonSlug}`} className='being-course-button'>BEGIN COURSE</Link>
        </header>
          <section className="main__section">
            <nav className="courses__nav">
              <ul>
                <li className='active'>DASHBOARD</li>
                <li>COMMUNITY</li>
                <li>RESOURCES</li>
              </ul>
              <div className="search-bar">
                <img src="" alt="" />
                <p>search for something....</p>
              </div>
            </nav>
            <article className="main__article">
              <h2>Course Overview</h2>
              <p>{course.overview}</p>
              <h2>WHAT YOU WILL LEARN</h2>
              <p>{course.learningObjectives}</p>
              <h2>ASSESSMENT AND CERTIFICATION</h2>
              <p>{course.assessmentDetails}</p>
            </article>
          </section>
        </section>
    </section>
  )
}

export default CourseDashboard