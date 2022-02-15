import React from 'react';
import YouTube from '../assets/images/youtube.png';
import InstaTele from '../assets/images/InstaTele.jpeg';
import { Box, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    image: {
        width: '50%',
        height: '50%'
    }
})

const CodeForInterview = () => {
    const classes = useStyles(); 

    return (
        <Box>
            <Typography variant='h4'> Code For Interview </Typography>
            <Box style={{ display: 'flex' }}>
                <img className={classes.image} src={YouTube} alt="YouTube" />
                <img className={classes.image} src={InstaTele} alt="InstaTele" />
            </Box>
        </Box>
    );
};

export default CodeForInterview;