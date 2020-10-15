import React from 'react';




class Form extends React.Component {
  render() {
    return (
      
        <div className="row">
        <form className="col-md-4 offset-md-4">
          
        <p className="h3">Create your account!</p>

          <input type="text" name="fname" className="form-control" placeholder="First name" required></input><br></br>

          <input type="text" name="mname" className="form-control" placeholder="Middle name"></input><br></br>

          <input type="text" name="lname" className="form-control" placeholder="Last name" required></input><br></br>

          <input type="email" name="email" className="form-control" placeholder="email@example.com" required></input><br></br>

          <input type="tel" name="tel" className="form-control" placeholder="Telephone/Mobile number" required></input><br></br>

          <input type="date"name="DoB" className="form-control" placeholder="Date of Birth" required></input><br></br>

          <input type="password" name="password" className="form-control" placeholder="Password" required></input><br></br>

          <input type="password" name="cpassword" className="form-control" placeholder="Confirm Password" required></input><br></br>

          <input type="submit" value="Register" className="btn btn-primary" name="submit" required></input><br></br>
        </form>
        </div>
      
    );
  }
}

export default Form;