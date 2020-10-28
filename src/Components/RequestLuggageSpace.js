import React, {useState} from "react";
import {useHistory} from 'react-router-dom';



export default  function RequestLuggageSpace () {
  const history = useHistory()
   const [state, setState] = useState ({
    airline : "",
    departurecountry : "",
    departuredate : "",
    departuretime : "",
    arrivalcountry : "",
    arrivaldate : "",
    arrivaltime : "",
    numberofluggagespace : ""
   })
   const handleChange = (e) => {
    const {id , value} = e.target   
    setState(prevState => ({
        ...prevState,
        [id] : value
    }))
}
  
  

  return (
      <div className="row text-center main-content-wrapper">
        <form className="col-md-4 offset-md-4">
          <p>
            <strong>Travel Plan and luggage space request</strong>
          </p>
          <input
            type="text"
            name="airline"
            className="form-control"
            placeholder="Name of airline"
            value={state.airline}
            onChange={handleChange}
            required
          ></input>{" "}
          <br></br>
          <input
            type="text"
            name="departurecountry"
            className="form-control"
            placeholder="Departure country"
            value={state.departurecountry}
            onChange={handleChange}
            required
          ></input>{" "}
          <br></br>
          <input
            type="date"
            name="departuredate"
            className="form-control"
            placeholder="Departure date"
            value={state.departuredate}
            onChange={handleChange}
            required
          ></input>{" "}
          <br></br>
          <input
            type="time"
            name="departuretime"
            className="form-control"
            placeholder="Departure time"
            value={state.departuretime}
            onChange={handleChange}
            required
          ></input>{" "}
          <br></br>
          <input
            type="text"
            name="arrivalcountry"
            className="form-control"
            placeholder="Arrival country"
            value={state.arrivalcountry}
            onChange={handleChange}
            required
          ></input>{" "}
          <br></br>
          <input
            type="date"
            name="arrivaledate"
            className="form-control"
            placeholder="Arrival date"
            value={state.arrivaldate}
            onChange={handleChange}
            required
          ></input>{" "}
          <br></br>
          <input
            type="time"
            name="arrivaltime"
            className="form-control"
            placeholder="Arrival time"
            value={state.arrivaltime}
            onChange={handleChange}
            required
          ></input>{" "}
          <br></br>
          <input
            type="number"
            name="numberofluggagespace"
            className="form-control"
            placeholder="Number of luggage space needed"
            value={state.numberofluggagespace}
            onChange={handleChange}
            required
          ></input>{" "}
          <br></br>
          <input
            type="submit"
            name="submit"
            className="btn btn-primary"
            onClick={()=>history.push("/travellertype")}
            value="Submit"
          ></input>
        </form>
      </div>
    );
  }

