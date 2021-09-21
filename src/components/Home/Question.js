import React, { useState } from "react";

import "./Home.css";

import { useHistory } from "react-router-dom";

export default function AdminPanel({
  result,
  activeQuestion,
  lastPage,
  questionNumber,
  handleResult,
}) {
  const [answer, setanswer] = useState(activeQuestion.correctAnswer);
  const [option, setOption] = useState(null);

  let history = useHistory();

  const nextPage = () => {
      console.log(activeQuestion.correctAnswer, option)
    if (activeQuestion.correctAnswer === option) {
      handleResult(true);
    } else {
      handleResult(false);
    }
    setOption(null);
  };
  const submitHandler = () => {
    if (activeQuestion.correctAnswer === option) {
     
        history.push({ pathname: "/result", state: {result:result+1,total:lastPage} });
      } else {
        history.push({ pathname: "/result", state: result });

      }
  };
  return (
    <>
      <div class="question">
        <p>
          Q{questionNumber + 1}. {activeQuestion.question}
        </p>
      </div>
      <div class="options-list">
        {activeQuestion.answers &&
          activeQuestion.answers.map((item, index) => {
            return (
              <div
                onClick={(e) => {
                  setOption(index + 1);
                }}
                id={"option" + index}
                class={
                  index == option - 1
                    ? "option-a bg-success text-left p-2"
                    : "option-a  text-left p-2"
                }
              >
                {" "}
                {index + 1}.
                {"   "}
                <span>{item}</span>
              </div>
            );
          })}
          
      </div>
      <div class="footer" >
        {option ? (
          <>
          {console.log(questionNumber,lastPage)}
            {lastPage === questionNumber + 1 ? (
              <button class="next" onClick={submitHandler}>
                Submit
              </button>
            ) : (
              <button class="next" onClick={nextPage}>
                Next
              </button>
            )}
          </>
        ) : null}
      </div>
   
   </>
  );
}
