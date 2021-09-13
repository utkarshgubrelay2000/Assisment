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
  if(currentUser && history.location.state.result ){
    let data={marks:history.location.state.result,userId:currentUser.token}
    let res=await DeclareResult(data)
    console.log(res)
  localStorage.removeItem("AssesmentToken")

  }
}
const TryAgain=()=>{
  localStorage.removeItem("AssesmentToken")
  window.location.href='/'
}
  return (
    <Layout>
        <div class="result text-center">
        <div class="result_box ">
            <div class="header ">
                <h3>RESULT</h3>
            </div>
            <div class="result_body">
               <h2>Your Score :</h2>
               <h1>{history.location.state.result?history.location.state.result:"00"}  {history.location.state.total?"/"+history.location.state.total:""} </h1>

                	<button class="btn btn-primary" id="start_btn" onClick={TryAgain}>Try Again</button>
            </div>
          
        </div>
        
    </div>
    </Layout>
  )
}
