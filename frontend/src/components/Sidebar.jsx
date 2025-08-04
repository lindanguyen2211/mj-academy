import React from 'react'
import modjawLogo from '../assets/images/mj.png'
import homeIcon from '../assets/images/home.png'
import readingIcon from '../assets/images/learn.png'
import messageIcon from '../assets/images/messages.png'
import sphereIcon from '../assets/images/sphere-icon.png'
import usaFlag from '../assets/images/usa.png'
import profileIcon from '../assets/images/profile.png'
import { Link } from 'react-router-dom'
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div className='sidebar-container'>
        <div className="top">
            <a href="">
                <img src={modjawLogo} alt="Modjaw Logo" className='modjaw-logo icons' />
            </a>
            <Link to="/dashboard">
                <img src={homeIcon} alt="Home Icon" className='icons'/>
            </Link>
            <Link to="/dashboard">
                <img src={readingIcon} alt="Courses" className='icons' />
            </Link>
            <Link to="/dashboard">
                <img src={messageIcon} alt="Messages" className='icons' />
            </Link>
            <a href="">
                <img src={sphereIcon} alt="Sphere Logo" className='icons'/>
            </a>
        </div>
        <div className="bottom">
            {/* pop up to change default language */}
            <img src={usaFlag} alt="Change Language" className='icons'/>
            <Link to="/dashboard">
                <img src={profileIcon} alt="User Profile" className='icons' />
            </Link>
            <button className="signout-btn">
                Sign Out
            </button>
        </div>
    </div>
  )
}

export default Sidebar