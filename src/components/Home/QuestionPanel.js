import React, { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Home.css";
import Layout from "../Layout";
import { Link } from "react-router-dom";
import { allPreOrders, fetchClasses, getApprovedQuestions, getUsers, setOrderStatus } from "../../Api";
import { useHistory } from 'react-router-dom'
import QuestionCompo from "./Question";
import moment from 'moment'
import { useTimer } from 'react-timer-hook';
import './style-question.css'
export default function QuestionPanel({timing=15}) {
  const [result,setResult]=useState(0)
  const [orders,setorders]=useState([])
  const [timer,setTimer]=useState("")
  const [activeQuestion,setActiveQuestion]=useState({})
  const [questionNumber,setQuestionNumber]=useState(0)
  const [lastPage,setlastPage]=useState("")
  let history = useHistory()
  console.log(history.location)
  useEffect(() => {
    getAllOrders();
  }, [0]);
  function shuffle(array) {
    var currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  const getAllOrders = async () => {
    let res = await getApprovedQuestions();
    console.log(res);
   let shuffledArray= shuffle(res.data.data)
    setorders(shuffledArray);
    console.log(shuffledArray)
    setActiveQuestion(shuffledArray[0])
    setQuestionNumber(0)
    setlastPage(shuffledArray.length)
    setTimer(res.data.QuestionTime);
  };
  const time = new Date();
 
   console.log(timer*60,timing)

   time.setSeconds(time.getSeconds()+(history.location.state*60)); 
  const handleResult=(answer)=>{
if(answer){
  setResult(result+1)
}
setActiveQuestion(orders[questionNumber+1])
setQuestionNumber(questionNumber+1)
  
console.log(activeQuestion)
  }
  return (
    <Layout>
   <div class="questions">
   <div class="question_box">
			<div class="header">
               <div class="heading"><h3>Quiz Assessment</h3></div>
               <div class="timer"> <MyTimer expiryTimestamp={time} /></div>
            </div>
            <QuestionCompo result={result} lastPage={lastPage} handleResult={handleResult} questionNumber={questionNumber} activeQuestion={activeQuestion}/>
            </div>
     
    </div>
    </Layout>
  )
}
function MyTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
    days,

  } = useTimer({ expiryTimestamp, onExpire: () => alert('Expired') });


  return (
    <div class='text-center' >
  
      <div class='text-light' style={{fontSize:'1.5rem'}} >
 <span>{minutes}</span>:<span>{seconds}</span>
      </div>
     
    </div>
  );
}