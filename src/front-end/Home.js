import React from "react";
import './Home.css'

class Home extends React.Component {
  render() {
    return (
      
      <div>
<div className="container-fluid home-main">
      <div className="typewriter">
      <h2>ExtraGain is here to help!</h2>
      </div>
      
    </div>
    <div class="container-fluid home-content1">
      <div class="row">
        <div class="col-md-6 content1-left">
          <h3>Why use ExtraGain<span class="blinker">?</span></h3>
          
          
        </div>
        <div class="col-md-6 content1-right">
        <p>ExtraGain gives travellers the opportunity to either make extra
              money or get a slot for their extra luggage at an unbeatable
             price!</p>
        </div>
      </div>
    </div>
    <div class="container-fluid home-content2">
      <p><span>All rights reserved. Copyright @2020. </span>.</p>
    </div>
      </div>
      
      
    );
  }
}

export default Home;
