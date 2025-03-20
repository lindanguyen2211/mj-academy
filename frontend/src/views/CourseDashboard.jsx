import React from 'react'
import './CourseDashboard.css'
import { Link } from 'react-router-dom'

const CourseDashboard = () => {
  const logo = new URL("../assets/images/MODJAW_Logo.png", import.meta.url).href
  const profile = new URL("../assets/images/profile-picture.png", import.meta.url).href
  const icon = new URL("../assets/images/pc-icon.png", import.meta.url).href

  return (
    <section id='courses'>
      <aside>
        <Link to='/dashboard' className='white'>&lt; Back to Dashboard</Link>
        <img src={logo} alt="modjaw logo" className='sidebar-logo'/>
        <p className='chapter-title'>Chapter 1:Introduction to TWIM&trade; Software</p>
        <p className="lesson">1.1 What is 4D Dentistry?</p>
        <p className="lesson">1.2 Key Features</p>
        <p className="lesson"> 1.3 Create New Patient Profile</p>
        <p className="lesson">1.4 Uploading IOS, Face Scans and CBCT</p>
        <p className="chapter-title">Chapter 2: Capture Jaw Motion</p>
        <p className="lesson">2.1 Tips & Tricks</p>
        <p className="lesson">2.2 Importance of Proper Point Picking</p>
        <p className="chapter-title">Chapter 3: Reviewing the Data</p>
        <p className="lesson">3.1 Why is recording speech important?</p>
        <p className="lesson">3.2 How to read Axio Graphs</p>
        <p className="lesson">3.3 How to Crop Motion Data</p>
        <p className="chapter-title">Chapter 4: Import to CAD Software</p>
        <p className="lesson">4.1 Import Jaw Motion to EXOCAD</p>
        <p className="lesson">4.2 Import Jaw Motion to 3SHAPE</p>
      </aside>
      <section className='main'>
        <header>
          <img src={profile} alt="profile picture" className="profile-picture" />
          <div>
            <p className='welcome-message'>WELCOME BACK, TAYLOR</p>
            <div className="progress">
              <img src={icon} alt="icon of a computer" className='pc-icon'/>
              <p>100% COMPLETE</p>
            </div>
          </div>
          <button>BEGIN COURSE</button>
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
              <p>This course is designed to provide dental professionals with a comprehensive understanding of TWIM™ software and its integration into modern digital dentistry. By mastering TWIM™, participants will enhance their diagnostic precision, improve treatment planning, and elevate patient communication using 4D dynamic data.</p>
              <h2>WHAT YOU WILL LEARN</h2>
              <p>Participants will learn the fundamentals of TWIM™ software and its role in 4D Dentistry™. They will gain the skills to navigate the TWIM™ interface efficiently, ensuring they can operate the software with ease. The course will teach how to import and manage patient data securely, allowing practitioners to maintain organized records. Attendees will also learn to capture and analyze real-time jaw motion data, improving diagnosis and treatment planning. They will explore TWIM™ features such as dynamic contact analysis and mandibular sequence tracking to optimize clinical outcomes. Additionally, participants will understand how to export 4D motion data for seamless collaboration with dental labs. Lastly, the course will cover how to leverage TWIMFIT™ services for personalized treatment designs, improving patient outcomes and enhancing clinical efficiency.</p>
              <h2>ASSESSMENT AND CERTIFICATION</h2>
              <p>To ensure participants have successfully grasped the concepts and practical applications of TWIM™ software, this course concludes with a comprehensive assessment that includes a knowledge check quiz featuring multiple-choice and scenario-based questions to assess comprehension, along with a practical evaluation where participants demonstrate their ability to import data, analyze jaw motion, and export dynamic data for lab collaboration.</p>
            </article>
          </section>
        </section>
    </section>
  )
}

export default CourseDashboard