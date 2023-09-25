import * as api from "../api/index";


// Question API

export const askQuestion = (questionData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.postQuestion(questionData);
    dispatch({ type: "POST_QUESTION", payload: data });
    dispatch(fetchAllQouestions());
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const fetchAllQouestions = () => async (dispatch) => {
  try {
    const { data } = await api.getAllQuestions();
    dispatch({ type: "FETCH_ALL_QUESTIONS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteQuestion = (id, navigate)=> async(dispatch)=>{
  try {
    const {data} = api.deleteQuestion(id)
    dispatch(fetchAllQouestions())
    navigate('/')
  } catch (error) {
    console.log(error);
  }
}

export const voteQuestion = (id, value, userId) => async (dispatch) =>{
try {
  const {data} = await api.voteQuestion(id, value, userId)
  dispatch(fetchAllQouestions())
} catch (error) {
  console.log(error)
}
}


// Answer API 

 
export const postAnswer = (answerData) => async (dispatch) => {
  try {
    const { id, noOfAnswers, answerBody, userAnswered, userId} = answerData;
    const { data } = await api.postAnswer(id,noOfAnswers,answerBody,userAnswered,userId );
    dispatch({ type: "POST_ANSWER", payload: data });
    dispatch(fetchAllQouestions());
  } catch (error) {
    console.log(error);
  }
};

export const deleteAnswer = (id, answerId, noOfAnswers) => async (dispatch) =>{
  try {
    const {data} = await api.deleteAnswer(id, answerId, noOfAnswers)
    dispatch(fetchAllQouestions())
  } catch (error) {
    console.log(error)
  }
}


