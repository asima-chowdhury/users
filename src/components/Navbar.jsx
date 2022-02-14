import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar} from '@material-ui/core';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
  header:{
      background: '#111111'
  }
});

const Navbar = () => {
    const classes = useStyles();
    
    return (
        <div>
            <AppBar className={classes.header} position="static">
                <Toolbar>
                    <Link to="/">Menu</Link>
                    <Link to="/all">All Users</Link>
                    <Link to="/add">Add Users</Link>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;