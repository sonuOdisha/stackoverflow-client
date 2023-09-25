import axios from "axios";

const API = axios.create({ baseURL: "https://stackoverflow-server-f4ok.onrender.com" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("Profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("Profile")).token
    }`;
  }
  return req; 
}); 

//This is for Authentication
export const logIN = (authData) => API.post("/user/login", authData);
export const signUP = (authData) => API.post("/user/signup", authData);


//This 4 is for Questions 
export const postQuestion = (questionData) => API.post('/questions/Ask',questionData);
export const getAllQuestions=()=>API.get('/questions/get');
export const deleteQuestion =(id) =>API.delete(`/questions/delete/${id}`)
export const voteQuestion = (id, value, userId )=>API.patch(`/questions/vote/${id}`, {value, userId});

//This 2 is for answers
export const postAnswer = ( id, noOfAnswers, answerBody, userAnswered, userId ) => API.patch(`/answer/post/${id}`, { noOfAnswers, answerBody, userAnswered, userId})
export const deleteAnswer = (id, answerId, noOfAnswers) => API.patch(`/answer/delete/${id}`, { answerId, noOfAnswers})

export const getAllUsers = () => API.get('/user/getAllUser');
export const updateProfile = (id, updateData) => API.patch(`/user/update/${id}`, updateData)