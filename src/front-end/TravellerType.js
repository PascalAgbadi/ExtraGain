// import { Grid } from "@material-ui/core";
import React from "react";
import SpaceRent from "./SpaceRent";
import SpaceRequest from "./SpaceRequest";
import './TravellerType.css';


export default function TravellerType() {
  return (
    
       <div>
          <div className="centered-one">
          <SpaceRent/>
          </div>
          <div className="centered-two">
          <SpaceRequest/>
          </div>
        </div>
        
  );
}