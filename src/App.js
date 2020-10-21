import React from "react";
// import Home from "./front-end/Home";
// import HowItWorks from "./front-end/HowItWorks";
// import UserRegistration from "./front-end/UserRegistration";
// import RentLuggageSpace from "./front-end/RentLuggageSpace";
// import RequestLuggageSpace from "./front-end/RequestLuggageSpace";
// import UserLogin from "./front-end/UserLogin";
// import NavBar from "./front-end/NavBar";
// import Dashboard from "./front-end/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import TravellerType from './front-end/TravellerType';
import TopBar from './front-end/TopBar';
import Footer from './front-end/Footer';
// import {
//   BrowserRouter as Router,
//   Route,
//   // Link,
//   Switch,
// } from "react-router-dom";

function App() {
  return (
    <div>
      <TopBar/>
      <TravellerType/>
      <Footer/>
    </div>
    // <Router>
    //   <div className="App">
    //     <NavBar />

    //     <Switch>
    //       <Route exact path="/" component={Home}></Route>
    //       <Route exact path="/HowItWorks" component={HowItWorks}></Route>
    //       <Route exact path="/Dashboard" component={Dashboard}></Route>
    //       <Route
    //         exact
    //         path="/UserRegistration"
    //         component={UserRegistration}
    //       ></Route>
    //       <Route exact path="/UserLogin" component={UserLogin}></Route>
    //       <Route
    //         exact
    //         path="/RequestLuggageSpace"
    //         component={RequestLuggageSpace}
    //       ></Route>
    //       <Route
    //         exact
    //         path="/RentLuggageSpace"
    //         component={RentLuggageSpace}
    //       ></Route>
    //     </Switch>
    //   </div>
    // </Router>
  );
}

export default App;
