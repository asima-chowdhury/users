import React from 'react';
import laptop from '../assets/images/laptop.jpg';
import crud from '../assets/images/crud.png';
import { Box, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    image: {
        width: '50%',
        height: '50%'
    },
    component: {
        margin: 50
    }
})

const Home = () => {
    const classes = useStyles();

    return (
        <Box className={classes.component}>
            <Typography variant='h4' style={{marginBottom: 50}}> Simple React CRUD Application for User</Typography>
            <Box style={{ display: 'flex' }}>
                <img className={classes.image} src={laptop} alt="laptop" />
                <img className={classes.image} src={crud} alt="crud" />
            </Box>
        </Box>
    );
};

export default Home;