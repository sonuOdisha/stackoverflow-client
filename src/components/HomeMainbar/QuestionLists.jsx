import React from 'react'
import Questions from './Questions'

const QuestionLists = ({questionsList}) => {
  return (
    <>
      {
        questionsList.map((question)=>(
            <Questions question={question} key={question._id}/>
        ))
      }
    </>
  )
}

export default QuestionLists
