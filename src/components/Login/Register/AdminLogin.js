import React, { useState, useEffect } from "react";
import { loginAdmin, loginStudent } from "../../../Api";
import { Link, useHistory } from "react-router-dom";
import Layout from "../../Layout";

import './style.css'
export default function AdminLogin() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
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
      password,
    };

    try {
      const resData = await loginAdmin(loginCredentials);
      setshowLoading(false);

      var eklavyaStudent = {
        token: resData.data.token,
      };

      localStorage.setItem("Admin", JSON.stringify(eklavyaStudent));
    } catch (e) {
      // console.log("Login error", e);
      setloginError(true);
      setshowLoading(false);

    }

    var currentUser = JSON.parse(localStorage.getItem("Admin"));

    if (currentUser) {
      window.location.href='/dashboard'
    }
  };

  return (
    <Layout>
    	<section class="login">
		<div class="login_box">
			<div class="left">
				
				<div class="contact">
					<form>
						<h3>Admin Signin</h3>
						<input type="email" placeholder="EMAIL" onChange={(e)=>setemail(e.target.value)}  name="email" required/>
						<input type="text" placeholder="password" onChange={(e)=>setpassword(e.target.value)}   name="password" required />
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
