import React, {useState} from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';



export default function SignUpFormUser() {
  const history = useHistory() 

  const [state, setState] = useState ({
    FirstName: "",
    MiddleName: "",
    LastName: "",
    Email: "",
    TelNumber: "",
    DateOfBirth: "",
    Password: "",
    ConfirmPassword: ""
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
          <p className="h3">Create your account!</p>
          <input
            id="fname"
            type="text"
            name="fname"
            className="form-control"
            placeholder="First name"
            value={state.FirstName}
            onChange={handleChange}
            required
          ></input>
          <br />

          <input
            id="mname"
            type="text"
            name="mname"
            className="form-control"
            placeholder="Middle name"
            value={state.MiddleName}
            onChange={handleChange}
          ></input>
          <br />

          <input
            id="lname"
            type="text"
            name="lname"
            className="form-control"
            placeholder="Last name"
            value={state.LastName}
            onChange={handleChange}
            required
          ></input>
          <br />

          <input
            id="email"
            type="email"
            name="email"
            className="form-control"
            placeholder="Email address"
            value={state.Email}
            onChange={handleChange}
            required
          ></input>
          <br />

          <input
            id="tel"
            type="tel"
            name="tel"
            className="form-control"
            placeholder="Telephone/Mobile number"
            value={state.TelNumber}
            onChange={handleChange}
            required
          ></input>
          <br />

          <input
            id="DoB"
            type="date"
            name="DoB"
            className="form-control"
            placeholder="Date of Birth"
            value={state.DateOfBirth}
            onChange={handleChange}
            required
          ></input>
          <br />

          <input
            id="password"
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
            value={state.Password}
            onChange={handleChange}
            required
          ></input>
          <br />

          <input
            id="cpassword"
            type="password"
            name="cpassword"
            className="form-control"
            placeholder="Confirm Password"
            value={state.ConfirmPassword}
            onChange={handleChange}
            required
          ></input>
          <br />

          <input
            id="submit"
            type="submit"
            value="Register"
            className="btn btn-primary"
            name="submit"
            onClick={()=>history.push("/travellertype")}
            required
          ></input>
          <br />
        </form>
      </div>
    );
  }



