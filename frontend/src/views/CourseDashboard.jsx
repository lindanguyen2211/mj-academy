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
      </section>
    </section>
  )
}

export default CourseDashboard