import React, { useState, useEffect } from "react";
import { getApprovedQuestions, loginStudent } from "../../../Api";
import { Link, useHistory } from "react-router-dom";
import Layout from "../../Layout";

import './style.css'
export default function Login() {
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const history = useHistory();
  const [questionNumber, setQuestionNumber] = useState(0);
  const [questionTime,setQuestionTime] = useState(0);
  const [loginError, setloginError] = useState(false);

  useEffect(() => {
    var currentUser = JSON.parse(localStorage.getItem("Admin"));

    if (currentUser) {
      history.push("/dashboard");
    }

getQuestion()
    return () => {
      // console.log("Cleanup");
    };
  }, []);
const getQuestion=async()=>{

  let res = await getApprovedQuestions();
  console.log(res);
  setQuestionNumber(res.data.numberOfQuestion)
  setQuestionTime(res.data.QuestionTime)

}
  const submitLoginCredentials = async (e) => {
    setloginError(false);
   
    e.preventDefault();
    const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(!re.test(String(email).toLowerCase()))
  {
    alert("Email not VALID")
  }
else if(email && name){
  var loginCredentials = {
    email,
    name,
  };
  
  try {
    const resData = await loginStudent(loginCredentials);
   
    console.log("Login data", resData);
    
    // console.log("token : ", resData.data.token);
    
    var eklavyaStudent = {
      token: resData.data.data._id,
    };
    
    localStorage.setItem("AssesmentToken", JSON.stringify(eklavyaStudent));
  } catch (e) {
    // console.log("Login error", e);
    setloginError(true);
  
  }
  
}
    var currentUser = JSON.parse(localStorage.getItem("AssesmentToken"));

    if (currentUser) {
      let res = await getApprovedQuestions();
      console.log(res);
  
      history.push({
        pathname:'/quiz'
,        state:res.data.QuestionTime
      })
    }
    else{
      alert("Fill Up Fields")
    }
  };

  return (
    <Layout>
    	<section class="login">
		<div class="login_box">
			<div class="left">
				
				<div class="contact">
					<form>
						<h3>USER INFORMATION</h3>
						<input type="text" placeholder="USERNAME" onChange={(e)=>setname(e.target.value)}   name="uname" required />
						<input type="email" placeholder="EMAIL" onChange={(e)=>setemail(e.target.value)}  name="email" required/>
						<button class="submit" id="start_btn" onClick={submitLoginCredentials}>START</button>
					</form>
				</div>
			</div>
			<div class="right">
				<div class="right-text">
					<h3>RULES <br/> FOR THE ASSESSMENT</h3>
          <ol>
						<li>Please enter your correct details.</li>
						<li>There will be {questionNumber} questions in total.</li>
						<li>Total time given for the test is {questionTime}  minutes </li>
						<li>Result will be shown after the assessment.</li>
					</ol>
				</div>
				
			</div>
		</div>
	</section>
    </Layout>
  );
}
