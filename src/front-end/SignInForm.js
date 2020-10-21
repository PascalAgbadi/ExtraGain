import React from "react";
import {withRouter} from "react-router-dom";
// import Button from '@material-ui/core/Button';




class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: "",
      Password: "",
    };
  }

  LoginUser() {
    console.log("LoginUser Working?");
    const userData = this.state;
    console.log(userData);

    fetch("http://localhost:4000/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
    .then((res) => res.json())
    .then((res) => {
      const result = JSON.stringify(res);
      if (res.status === "success") {
        console.log(res);
        localStorage.setItem("user", JSON.stringify(res.user));
        this.props.history.push("/Dashoard");
      } else if (result.status === "NotFound") {
        alert("Invalid email or password");
      }
     
    })
      .catch(error => {
        console.log(error)
      });
  }

  render() {
    return (
      <div className="row text-center">
        <form className="col-md-4 offset-md-4">
          <p className="h3">Sign in</p>
          <input
            value={this.state.Email}
            onChange={(event) => {
              this.setState({ Email: event.target.value });
            }}
            type="email"
            name="username"
            className="form-control"
            placeholder="Email address"
            required
          ></input>{" "}
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
            onClick={this.LoginUser.bind(this)}
            type="button"
            name="submit"
            className="btn btn-primary"
            value="Sign in"
          ></input>
        </form>
      </div>
    );
  }
}

export default withRouter(SignInForm);