import React from 'react'
import './UserDashboard.css'
import CourseCard from '../components/CourseCard';

const UserDashboard = () => {
  // placeholder data for courses, setup to retrieve from database later
  const courses = [
    {
      id: 1,
      courseTitle: "Getting Started",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aspernatur quasi excepturi libero veritatis atque id? Et harum cumque error.",
        img: new URL("../assets/images/MODJAW_Avatar-screen-1.png", import.meta.url).href,
        progress: 100
      },
    {
      id: 2,
      courseTitle: "Introduction to 4D Dentistry",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aspernatur quasi excepturi libero veritatis atque id? Et harum cumque error.",
        img: new URL("../assets/images/Modjaw-aesthetic-light-facescan-1.png", import.meta.url).href,
        progress: 50
      },
    {
      id: 3,
      courseTitle: "Clinical Training",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aspernatur quasi excepturi libero veritatis atque id? Et harum cumque error.",
        img: new URL("../assets/images/MODJAW_Twim-registration-record-1.png", import.meta.url).href,
        progress: 0
      },
    {
      id: 4,
      courseTitle: "Lab Training",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aspernatur quasi excepturi libero veritatis atque id? Et harum cumque error.",
        img: new URL("../assets/images/Modjaw-Balkwill-TWIM-1.png", import.meta.url).href,
        progress: 0
      },
  ];

  return (
    <section id='user-dashboard' className='container'>
      <h1>Welcome to MODJAW&trade; Digital Academy</h1>
      <h2>Introducing 4D Dentistry to Digital Workflows</h2>

      {courses.map((item) => (
        <CourseCard
          key={item.id}
          title={item.courseTitle}
          description={item.description}
          img={item.img}
          progress={item.progress}
        />
      ))}
    </section>
  );
};

export default UserDashboard