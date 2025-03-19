import React from 'react'
import './UserDashboard.css'

const UserDashboard = () => {
  // placeholder data for courses, setup to retrieve from database later
  const courses = [
    {
      id: 1,
      courseTitle: "Getting Started",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aspernatur quasi excepturi libero veritatis atque id? Et harum cumque error.",
      img: "/assets/images/MODJAW_Avatar-screen 1.png",
    },
    {
      id: 2,
      courseTitle: "Introduction to 4D Dentistry",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aspernatur quasi excepturi libero veritatis atque id? Et harum cumque error.",
      img: "/assets/images/Modjaw-aesthetic-light-facescan 1.png",
    },
    {
      id: 3,
      courseTitle: "Clinical Training",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aspernatur quasi excepturi libero veritatis atque id? Et harum cumque error.",
      img: "/assets/images/MODJAW_Twim-registration-record 1.png",
    },
    {
      id: 4,
      courseTitle: "Lab Training",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aspernatur quasi excepturi libero veritatis atque id? Et harum cumque error.",
      img: "/assets/images/Modjaw-Balkwill-TWIM 1.png",
    },
  ];

  return (
    <div>UserDashboard</div>
  )
}

export default UserDashboard