import React from 'react';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
import Footer from './Footer';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import './Home.css';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    
  },
  
}));

export default function Home() {
  const classes = useStyles();

  return (
    
    <div className="home-background">
    <div className={classes.root}> 
          <Typography variant="h3" noWrap align="center" paragraph="true" color="inherit" >
           ExtraGain!
          </Typography>
          <Typography variant="h5" noWrap align="center"paragraph="true" color="text-primary" >
           Fly with your extra luggages without breaking your wallet!<br/> 
            Fly and make extra money by renting your free luggage space!
          </Typography>
           <Footer/>
    </div>
    </div>
  );
}