import React from 'react';


class RequestLuggageSpace extends React.Component {
    render() {
      return (
<div className="d-flex justify-content-center align-items-center vw-100 vh-100">
        <div className="row w-25 p-3">
        <form className="col-md-12 text-center">

        <p>Enter your travelling itenery and luggage space request details</p>

          <input type="text" name="airline" className="form-control" placeholder="name of airline" required></input> <br></br>
          
          <input type="text" name="departurecountry" className="form-control" placeholder="departure country" required></input> <br></br>

          <input type="date" name="departuredate" className="form-control" placeholder="departure date" required></input> <br></br>
          <input type="time" name="departuretime" className="form-control" placeholder="departure time" required></input> <br></br>

          <input type="text" name="arrivalcountry" className="form-control" placeholder="arrival country" required></input> <br></br>

          <input type="date" name="arrivaledate" className="form-control" placeholder="arrival date" required></input> <br></br>
          <input type="time" name="departuretime" className="form-control" placeholder="departure time" required></input> <br></br>
          
          <input type="number" name="numberofluggagespace" className="form-control" placeholder="Enter here the number of luggage space needed" required></input> <br></br>

          <input type="submit" name="submit" className="btn btn-primary" value="Sign in"></input>
        </form>
        </div>
      </div>
      );
    }
  }









export default RequestLuggageSpace;