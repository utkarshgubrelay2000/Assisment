import React, { useState, useEffect } from "react";
import { loginStudent } from "../../../Api";
import { Link, useHistory } from "react-router-dom";
import Layout from "../../Layout";

import './style.css'
export default function Login() {
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const history = useHistory();
  const [showLoading, setshowLoading] = useState(false);
  const [loginError, setloginError] = useState(false);

  useEffect(() => {
    var currentUser = JSON.parse(localStorage.getItem("Admin"));

    if (currentUser) {
      history.push("/dashboard");
    }

    return () => {
      // console.log("Cleanup");
    };
  }, []);

  const submitLoginCredentials = async (e) => {
    setloginError(false);
    setshowLoading(true);
    e.preventDefault();

    var loginCredentials = {
      email,
      name,
    };

    try {
      const resData = await loginStudent(loginCredentials);
      setshowLoading(false);

      // console.log("Login data", resData);

      // console.log("token : ", resData.data.token);

      var eklavyaStudent = {
        token: resData.data.token,
      };

      localStorage.setItem("AssesmentToken", JSON.stringify(eklavyaStudent));
    } catch (e) {
      // console.log("Login error", e);
      setloginError(true);
      setshowLoading(false);

    }

    var currentUser = JSON.parse(localStorage.getItem("AssesmentToken"));

    if (currentUser) {
      window.location.href='/quiz'
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
					<ul>
						<li>Please enter your correct details.</li>
						<li>There will be 5 questions in total.</li>
						<li>Time given for each question is 20 seconds.</li>
						<li>Result will be shown after the assessment.</li>
					</ul>
				</div>
				
			</div>
		</div>
	</section>
    </Layout>
  );
}
