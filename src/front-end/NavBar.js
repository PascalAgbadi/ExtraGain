import React from "react";

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
              LOGO
            </a>
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0 pull-right">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  How It Works!
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Register/Login
                </a>
              </li>
            </ul>
            <form className="form-inline">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button className="btn btn-secondary my-2 my-sm-0 font-weight-bold text-monospace" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
      
    );
  }
}

export default NavBar;
