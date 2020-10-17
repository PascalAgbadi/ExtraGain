import React from "react";

class RequestLuggageSpace extends React.Component {
  render() {
    return (
      <div className="row text-center">
        <form className="col-md-4 offset-md-4">
          <p>
            <strong>Travel Plan and luggage space request</strong>
          </p>
          <input
            type="text"
            name="airline"
            className="form-control"
            placeholder="Name of airline"
            required
          ></input>{" "}
          <br></br>
          <input
            type="text"
            name="departurecountry"
            className="form-control"
            placeholder="Departure country"
            required
          ></input>{" "}
          <br></br>
          <input
            type="date"
            name="departuredate"
            className="form-control"
            placeholder="Departure date"
            required
          ></input>{" "}
          <br></br>
          <input
            type="time"
            name="departuretime"
            className="form-control"
            placeholder="Departure time"
            required
          ></input>{" "}
          <br></br>
          <input
            type="text"
            name="arrivalcountry"
            className="form-control"
            placeholder="Arrival country"
            required
          ></input>{" "}
          <br></br>
          <input
            type="date"
            name="arrivaledate"
            className="form-control"
            placeholder="Arrival date"
            required
          ></input>{" "}
          <br></br>
          <input
            type="time"
            name="departuretime"
            className="form-control"
            placeholder="Departure time"
            required
          ></input>{" "}
          <br></br>
          <input
            type="number"
            name="numberofluggagespace"
            className="form-control"
            placeholder="Number of luggage space needed"
            required
          ></input>{" "}
          <br></br>
          <input
            type="submit"
            name="submit"
            className="btn btn-primary"
            value="Submit"
          ></input>
        </form>
      </div>
    );
  }
}

export default RequestLuggageSpace;
