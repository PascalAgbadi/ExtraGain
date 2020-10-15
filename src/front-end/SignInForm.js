import React from 'react';



class SignInForm extends React.Component {
  render() {
    return (
      
      <div className="d-flex justify-content-center align-items-center vw-100 vh-100">
        <div className="row w-25 p-3">
        <form className="col-md-12 text-center">

        <p className="h3">Sign in</p>

          <input type="text" name="username" className="form-control" placeholder="Username" required></input> <br></br>
          
          <input type="password" name="password" className="form-control" placeholder="Password" required></input><br></br>

          <input type="submit" name="submit" className="btn btn-primary" value="Sign in"></input>
        </form>
        </div>
      </div>

    );
  }
}




export default SignInForm;