import React from "react";
import "./Dashboard.css";
import ProfileSection from "../components/ProfileSection";
import CourseSlider from "../components/CourseSlider";

const Dashboard = () => {
  return (
    <section id="Dashboard">
      <ProfileSection />
      <CourseSlider />
    </section>
  );
};

export default Dashboard;
