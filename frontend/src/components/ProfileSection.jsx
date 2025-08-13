import React, { useState } from "react";
import "./ProfileSection.css";
import { IoMdSearch } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import banner from "../assets/images/banner.png";
import badge from "../assets/images/level 1 badge 1.png";
import tempProfileImage from "../assets/images/temp_profileImage.jpg"

const ProfileSection = () => {
  let user = "Linda Nguyen";
  const [searchTerm, setSearchTerm] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Searching for ${searchTerm}`);
  };
  return (
    <article id="Dashboard_userProfile">
      <div className="top-bar">
        <h1>Welcome back, {user}</h1>
        <div className="row">
          <form onSubmit={handleSubmit} className="search_form">
            <input
              type="text"
              name="search"
              id="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search_input"
              placeholder="Looking for something?"
            />
            <button type="submit" className="search_icon">
              <IoMdSearch />
            </button>
          </form>
          <IoNotificationsOutline className="notifications" />
        </div>
      </div>
      <div className="profile-hero">
        <div className="banner">
          <img src={banner} alt="profile banner" />
        </div>
        <div className="profile">
          <div className="profile_imgWrapper">
            <img src={tempProfileImage} alt="" className="profile_img" />
            <img src={badge} alt="" className="badge" />
          </div>
          <div className="location">
            <h1>MJ DENTAL LAB</h1>
            <p>JUPITER, FLORIDA, USA</p>
          </div>
          <div className="course-progress">
            <p>
              <strong>LAST ACTIVITY: </strong> MODULE 2 - SPLINT WORKFLOW
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProfileSection;
