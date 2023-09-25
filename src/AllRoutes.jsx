import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "./components/Pages/Auth/Auth.jsx";
import Home from "./components/Pages/Home/Home.jsx";
import Questions from "./components/Pages/Questions/Questions.jsx";
import AskQuestion from "./components/Pages/AskQuestion/AskQuestion.jsx";
import DisplayQuestion from "./components/Pages/Questions/DisplayQuestion.jsx";
import Tags from "./components/Pages/Tags/Tags";
import Users from "./components/Pages/Users/Users.jsx";
import UserProfile from "./components/Pages/UserProfile/UserProfile.jsx";
import Chatbot from "./components/Pages/Chatbot/Chatbot.jsx";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/Auth" element={<Auth />} />
        <Route exact path="/AskQuestion" element={<AskQuestion/>} />
        <Route exact path="/Questions" element={<Questions/>} />
        <Route exact path="/Questions/:id" element={<DisplayQuestion/>} />
        <Route exact path="/Tags" element={<Tags/>} />
        <Route exact path="/Users" element={<Users/>} />
        <Route exact path="/Users/:id" element={<UserProfile/>} />
        <Route exact path="/Chatbot" element={<Chatbot/>} />
      </Routes>
    </div>
  );
};
export default AllRoutes;
