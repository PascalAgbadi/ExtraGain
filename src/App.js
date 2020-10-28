import React from "react";
import Home1 from "./Components/Home1";
// import HowItWorks from "./front-end/HowItWorks";
// import UserRegistration from "./front-end/UserRegistration";
import RentLuggageSpace from "./Components/RentLuggageSpace";
import RequestLuggageSpace from "./Components/RequestLuggageSpace";
// import UserLogin from "./front-end/UserLogin";
// import NavBar from "./front-end/NavBar";
// import Dashboard from "./front-end/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import TravellerType from './Components/TravellerType';
import TopBar from './Components/TopBar';
import SignInFormUser from './Components/SignInFormUser';
import SignUpFormUser from './Components/SignUpFormUser';


import {
  BrowserRouter as Router,
  Route,
  // Link,
  Switch,
} from "react-router-dom";

export default function App() {
  return (
    
     <Router>
      <div className="App">
      <div>
      <TopBar/>
      </div> 

         <Switch> 
          <Route exact path="/" component={Home1}></Route>
          <Route exact path="/rentluggagespace" component={RentLuggageSpace}></Route>
          <Route exact path="/requestluggagespace" component={RequestLuggageSpace}></Route>
          <Route exact path="/travellertype" component={TravellerType}></Route>
          {/* <Route exact path="/userlogin" component={UserLogin}></Route> */}
          <Route exact path="/signinformuser" component={SignInFormUser}></Route>
          <Route exact path="/signupformuser" component={SignUpFormUser}></Route>
          {/* <Route exact path="/UserRegistration" component={UserRegistration}></Route>
          <Route exact path="/UserLogin" component={UserLogin}></Route>
          <Route
            exact
            path="/RequestLuggageSpace"
            component={RequestLuggageSpace}
          ></Route>
          <Route
            exact
            path="/RentLuggageSpace"
            component={RentLuggageSpace}
          ></Route> */}
         </Switch>
      </div>
    </Router>
  );
} 


