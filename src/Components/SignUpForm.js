import React from "react";
import {withRouter} from "react-router-dom";
// import { browserHistory } from 'react-router';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstName: "",
      MiddleName: "",
      LastName: "",
      Email: "",
      TelNumber: "",
      DateOfBirth: "",
      Password: "",
      ComfirmPassword: ""
    };
  }

  SignUpUser() {
    console.log("SignUpUser Working?");
    const userData = this.state;
    console.log(userData);

    fetch("http://localhost:4000/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        localStorage.setItem("user", JSON.stringify(res));
        this.props.history.push("/Dashoard");
      })
      .catch(console.log);
  }

  render() {
 
    return (
      <div className="row text-center">
        <form className="col-md-4 offset-md-4">
          <p className="h3">Create your account!</p>
          <input
            value={this.state.FirstName}
            onChange={(event) => {
              this.setState({ FirstName: event.target.value });
            }}
            type="text"
            name="fname"
            className="form-control"
            placeholder="First name"
            required
          ></input>
          <br></br>

          <input
            value={this.state.MiddleName}
            onChange={(event) => {
              this.setState({ MiddleName: event.target.value });
            }}
            type="text"
            name="mname"
            className="form-control"
            placeholder="Middle name"
          ></input>
          <br></br>

          <input
            value={this.state.LastName}
            onChange={(event) => {
              this.setState({ LastName: event.target.value });
            }}
            type="text"
            name="lname"
            className="form-control"
            placeholder="Last name"
            required
          ></input>
          <br></br>

          <input
            value={this.state.Email}
            onChange={(event) => {
              this.setState({ Email: event.target.value });
            }}
            type="email"
            name="email"
            className="form-control"
            placeholder="Email address"
            required
          ></input>
          <br></br>

          <input
            value={this.state.TelNumber}
            onChange={(event) => {
              this.setState({ TelNumber: event.target.value });
            }}
            type="tel"
            name="tel"
            className="form-control"
            placeholder="Telephone/Mobile number"
            required
          ></input>
          <br></br>

          <input
            value={this.state.DateOfBirth}
            onChange={(event) => {
              this.setState({ DateOfBirth: event.target.value });
            }}
            type="date"
            name="DoB"
            className="form-control"
            placeholder="Date of Birth"
            required
          ></input>
          <br></br>

          <input
            value={this.state.Password}
            onChange={(event) => {
              this.setState({ Password: event.target.value });
            }}
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
            required
          ></input>
          <br></br>

          <input
            value={this.state.ComfirmPassword}
            onChange={(event) => {
              this.setState({ ComfirmPassword: event.target.value });
            }}
            type="password"
            name="cpassword"
            className="form-control"
            placeholder="Confirm Password"
            required
          ></input>
          <br></br>

          <input
            onClick={this.SignUpUser.bind(this)}
            type="button"
            value="Register"
            className="btn btn-primary"
            name="submit"
            required
          ></input>
          <br></br>
        </form>
      </div>
    );
  }
}

export default withRouter(SignUpForm);
