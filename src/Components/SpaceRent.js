import React from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  Button: {
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 50,
    // padding: '0 30px',
  },
});





export default function SpaceRent()  {
    const classes = useStyles();
    return (
      <div>
        <Button variant="contained" color="secondary" className={classes.Button}>
            Rent Your Space! 
        </Button>
      </div>
    );
  }



