import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar} from '@material-ui/core';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
  header:{
      background: '#111111'
  },
  tabs:{
      color: '#FFFFFF',
      textDecoration: 'none',
      marginRight: 20,
      fontSize: 20
  }
});

const Navbar = () => {
    const classes = useStyles();
    
    return (
        <div>
            <AppBar className={classes.header} position="static">
                <Toolbar>
                    <Link className={classes.tabs} to="/">Menu</Link>
                    <Link className={classes.tabs} to="/all">All Users</Link>
                    <Link className={classes.tabs} to="/add">Add Users</Link>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;