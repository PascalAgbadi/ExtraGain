import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import React from "react";


const useStyles = makeStyles ((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  
  toolbar: {
    // minHeight: 128,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },

  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
  },  
}));


export default function Footer() {
  const classes = useStyles();
  return (
      <div>
       <AppBar position="fixed" color="primary" className={classes.appBar}>
       <Toolbar className={classes.toolbar}>
         <Typography className={classes.title} variant="h6" noWrap align="center">
         <p><span>All rights reserved. Copyright @2020.</span></p>
         </Typography>
        </Toolbar> 
      </AppBar> 
      </div>
      
    );
  }



