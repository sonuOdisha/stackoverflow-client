import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {useSelector} from 'react-redux';
import "./HomeMainbar.css";
import QuestionLists from "./QuestionLists";

const HomeMainbar = () => {

  const location = useLocation();
  const user = null; 
  const navigate = useNavigate();

  const questionsList = useSelector( state => state.questionsReducer)
// console.log(questionsList)
  // var questionsList = [
  //   {
  //     _id: '1',
  //     upVotes: 3,
  //     downVotes:2,  
  //     noOfAnswers:2 ,
  //     questionTitle: "What is a function?",
  //     questionBody: "It meant to be",
  //     questionTags: ["java", "node.js", "reactjs", "mongodb"],
  //     userPosted: "Nitya",
  //     askedOn: "jan 1",
  //     userId: 1,
  //     answer: [{
  //       answerBody:"Answer",
  //       userAnswered:'Nitya',
  //       answerdOn:"jan2",
  //       userId:2,
  //     }]
  //   },
  //   {
  //     _id: '2',
  //     upVotes: 3,
  //     downVotes:2, 
  //     noOfAnswers: 0,
  //     questionTitle: "What is a function?",
  //     questionBody: "It meant to be",
  //     questionTags: ["javascript", "R", "Python"],
  //     userPosted: "Nitya",
  //     askedOn: "jan 1",
  //     userId: 1,
  //     answer: [{
  //       answerBody:"Answer",
  //       userAnswered:'Nitya',
  //       answerdOn:"jan2",
  //       userId:2,
  //     }]
  //   },
  //   {
  //     _id: '3',
  //     upVotes: 3,
  //     downVotes:2, 
  //     noOfAnswers: 0,
  //     questionTitle: "What is a function?",
  //     questionBody: "It meant to be",
  //     questionTags: ["javascript", "R", "Python"],
  //     userPosted: "Nitya",
  //     askedOn: "jan 1",
  //     userId: 1,
  //     answer: [{
  //       answerBody:"Answer",
  //       userAnswered:'Nitya',
  //       answerdOn:"jan2",
  //       userId:2,
  //     }]
  //   },
  // ];
const checkAuth =()=>{
  if (user === 1){
    alert("login or signup to ask a question")
    navigate('/Auth')
  }else{
    navigate('/AskQuestion')
  }
}

  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Question</h1>
        ) : (
          <h1>All Questions</h1>
        )}
        <button onClick={checkAuth} className="ask-btn">
          Ask Question
        </button>
      </div>
      <div>
        {questionsList.data === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{questionsList.data.length} questions</p>
            <QuestionLists questionsList={questionsList.data} />
          </> 
        )}
      </div>
    </div>
  );
};

export default HomeMainbar;
