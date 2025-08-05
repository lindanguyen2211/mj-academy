import React from "react";
import "./Dashboard.css";
import ProfileSection from "../components/ProfileSection";
import Modules from "../components/Modules";

const Dashboard = () => {
  return (
    <>
      <ProfileSection />
      <Modules />
    </>
  );
};

export default Dashboard;
