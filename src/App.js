import Home from "./components/Home/Home";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login/Register/Login";
import ScrollToTop from "react-router-scroll-top";
import AdminLogin from "./components/Login/Register/AdminLogin";
import AdminPanel from "./components/Home/AdminPanel";

function App() {
  const [isUser, setIsUser] = useState(null);
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("Admin"));
    //  console.log(currentUser)
    setIsUser(currentUser);
  }, [0]);
  return (
    <Router>
      <ScrollToTop>
        <div className="App">
          {isUser?<>
          <Route exact path="/dashboard" component={Home} />
          <Route exact path="/admin-quiz" component={AdminPanel} /></>
        :<>
        <Route exact path="/quiz" component={Home} />
          <Route exact path="/" component={Login} />
          <Route exact path="/adminLogin" component={AdminLogin} /></>
        }

          {/* <Switch>
            <Route exact path="/Classes" component={Classes} />

            <Route exact path="/courselist" component={CourseList} />
            <Route exact path="/cart" component={Cart} />
         
            <Route
              exact
              path="/subjectdetail/:subjectId"
              component={SubjectDetail}
            />
            <Route
              exact
              path="/classsubjectlist/:classId"
              component={ClassSubjectList}
            />
            <Route
              exact
              path="/subscribe/:classId/:nameOfClass"
              component={Subscribe}
            />

            <Route exact path="/dashboard" component={StudentDashboard} />
            <Route
              exact
              path="/dashboard/upcomingSessions/:studentId"
              component={UpcomingSessions}
            />
            {/* <Route exact path="/upcomingsessiondetail/:sessionId" component={UpcomingSessionDetail}/> 
            <Route
              exact
              path="/dashboard/studentsubjectlist/:className/:classID"
              component={StudentSubjectList}
            />
            <Route
              exact
              path="/dashboard/studentsubjectschedule/:subjectId/:classID"
              component={StudentSubjectSchedule}
            />
            <Route exact path="/paymenttest" component={PaymentTest} />
            <Route exact path="/payment" component={Payment} />

            <Route exact path="/createmeeting" component={Classes} />
          </Switch>

         */}
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
