import React from "react";
import "./NavBar.css";
import {
  BrowserRouter as //Router,
  // Route,
  Link,
  // Switch
} from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary sticky-top font-weight-bold text-monospace">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="#">
            ExtraGain
          </a>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0 pull-right">
            <li className="nav-item active">
              <a className="nav-link">
                <Link to="/">Home</Link>{" "}
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to="/HowItWorks">How It Works!</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to="/Dashboard">Dashboard</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to="/RequestLuggageSpace">Request Luggage Space</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to="/RentLuggageSpace">Rent Luggage Space</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to="/UserRegistration">Register</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to="/UserLogin">Login</Link>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;