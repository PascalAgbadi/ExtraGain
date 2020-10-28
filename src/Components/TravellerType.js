// import { Grid } from "@material-ui/core";
import React from "react";
import { useHistory } from 'react-router-dom'
import SpaceRent from "./SpaceRent";
import SpaceRequest from "./SpaceRequest";
import './TravellerType.css';


export default function TravellerType() {
  const history = useHistory()
  return (
    
       <div>
          <div className="centered-one" onClick={()=>history.push("/rentluggagespace")}>
          <SpaceRent/>
          </div>
          <div className="centered-two" onClick={()=>history.push("/requestluggagespace")}>
          <SpaceRequest/>
          </div>
        </div>
        
  );
}