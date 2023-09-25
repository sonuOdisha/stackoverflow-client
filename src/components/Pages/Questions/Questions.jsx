import React from "react";
import "../../../App.css"
import RightSidebar from "../../RightSidebar/Rightsidebar"
import HomeMainbar from "../../HomeMainbar/HomeMainbar";
import LeftSidebar from "../../LeftSidebar/LeftSidebar";
const Questions = () => {
  return (
    <div className="home-container-1">
      <LeftSidebar/>
      <div className="home-container-2">
        <HomeMainbar />
        <RightSidebar />
      </div>
    </div>
  );
};
export default Questions;
