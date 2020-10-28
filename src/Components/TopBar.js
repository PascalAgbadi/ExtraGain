import React from 'react';
import { makeStyles, AppBar, Toolbar, Typography, Button} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import { useHistory } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  FlightTakeoffIcon: {
    marginRight: theme.spacing(0),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function TopAppBar() {
  const classes = useStyles();
  const history = useHistory()
  return (
    
    <body>
      <header>
      <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" className={classes.FlightTakeoffIcon} color="inherit" aria-label="menu" onClick={()=>history.push("/")}>
            <FlightTakeoffIcon fontSize="large"/>
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            ExtraGain
          </Typography>
          <Button color="inherit" onClick={()=>history.push("/signinformuser")}>Login</Button>
          <Button color="inherit" onClick={()=>history.push("/signupformuser")}>Register</Button>
        </Toolbar>
      </AppBar>
    </div>
      </header>


    </body>
    
  );
}
