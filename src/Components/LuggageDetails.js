import React from 'react';
import './LuggageProfile.css';



class LuggageDetails extends React.Component {
    render() {
      return (
        <div className="center">
            <h4>Enter Luggage details</h4>
            <form>
          <input type="text" name="Snumber" placeholder="Serial number"></input><br></br>
          <input type="text" name="Lowner" placeholder="Luggage owner"></input><br></br>
          <input type="text" name="Lcertifier" placeholder="Luggage certifier"></input><br></br>
          <input type="text" name="Lreceiver" placeholder="Luggage receiver"></input><br></br>
          <input type="text" name="Dstatus" placeholder="Delivery status"></input><br></br>
           </form>
        </div>
      );
    }
  }










export default LuggageDetails;