import React, { useState } from "react";
import "./ProfileSection.css";
import { IoMdSearch } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";

const ProfileSection = () => {
  let user = "Linda Nguyen";
  const [searchTerm, setSearchTerm] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Searching for ${searchTerm}`);
  };
  return (
    <section id="user_DashboardProfile">
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
          <IoNotificationsOutline className="notifications"/>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
