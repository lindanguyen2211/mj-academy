import React, { useEffect, useState } from 'react'
import './CourseDashboard.css'
import Sidebar from '../components/Sidebar'

const CourseDashboard = () => {
  const profile = new URL("../assets/images/profile-picture.png", import.meta.url).href
  const icon = new URL("../assets/images/pc-icon.png", import.meta.url).href

  // initialize data state and fetch data from json
  const [data, setData] = useState([]);

  // function to get data
  const getData = async () => {
    fetch("/course.json")
      .then((res) => res.json())
      .then((res) => setData(res));
  };

  // on load, fetch data
  useEffect(() => {
    getData();
  });

  return (
    <section id='courses'>
      <Sidebar data={data}/>
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