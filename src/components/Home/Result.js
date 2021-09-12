import React, { useEffect, useState } from "react";

import "./Home.css";
import Layout from "../Layout";

import './style-result.css'
import { useHistory } from "react-router";
import { DeclareResult } from "../../Api";
export default function Result({timing=15}) {
let history=useHistory()
console.log(history.location.state)
useEffect(()=>{
  var currentUser = JSON.parse(localStorage.getItem("AssesmentToken"));
console.log(currentUser)
declareResult(currentUser)
},[0])
const declareResult=async (currentUser)=>{
  if(currentUser){
    let data={marks:history.location.state.result,userId:currentUser.token}
    let res=await DeclareResult(data)
    console.log(res)
  }
}
const TryAgain=()=>{
  localStorage.removeItem("AssesmentToken")
  window.location.href='/'
}
  return (
    <Layout>
        <div class="result">
        <div class="result_box">
            <div class="header">
                <h1>RESULT</h1>
            </div>
            <div class="result_body">
               <h2>Your Score :</h2>
               <h1>{history.location.state.result} / {history.location.state.total}</h1>

                	<button class="submit" id="start_btn" onClick={TryAgain}>Try Again</button>
            </div>
          
        </div>
        
    </div>
    </Layout>
  )
}
