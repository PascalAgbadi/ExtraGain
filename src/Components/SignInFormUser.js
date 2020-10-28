import React, {useState} from "react";
// import {useHistory} from 'react-router-dom';
// import Button from '@material-ui/core/Button';
import axios from 'axios';



export default function SignInFormUser() {
   
  
   const [state, setState] = useState ({
    email : "",
    password : ""
   })
   const handleChange = (e) => {
    const {id , value} = e.target   
    setState(prevState => ({
        ...prevState,
        [id] : value
    }))
}


const handleSubmit = (e) => {
  e.preventDefault();
  
  
  axios.post('/user', state)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}






    return (
        <div className="row text-center main-content-wrapper">
        <form className="col-md-4 offset-md-4" onSubmit={handleSubmit}>
          <p className="h3">Sign in</p>
          <input
            id="email"
            type="email"
            name="email"
            className="form-control"
            placeholder="Email address"
            value={state.email}
            onChange={handleChange}
            required
          ></input>{" "}
          <br></br>
          <input
            id="password"
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
            value={state.password}
            onChange={handleChange}
            required
          ></input>
          <br></br>
          <input
            type="submit"
            name="submit"
            className="btn btn-primary"
            value="Sign in"
          ></input>
        </form>
        </div>
    );
  }
