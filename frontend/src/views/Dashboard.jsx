import React from "react";
import "./Dashboard.css";
import ProfileSection from "../components/ProfileSection";
import Modules from "../components/Modules";

const Dashboard = () => {
  return (
    <section id="Dashboard">
      <ProfileSection />
      <Modules />
    </section>
  );
};

export default Dashboard;
