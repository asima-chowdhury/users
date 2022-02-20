import { Button, FormControl, FormGroup, Input, InputLabel, makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { addUser } from '../Service/api';
import { useNavigate } from "react-router-dom";


const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20,
        }
    }
})


const initialValues = {
    name: '',
    username: '',
    email: '',
    phone: ''
}

const AddUser = () => {
    const [user, setUser] = useState(initialValues);
    const { name, username, email, phone } = user;
    const classes = useStyles();
    const navigate = useNavigate();

    const onChangeValue = (e) => {
        console.log(e.target.value, e.target.name);
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log(user);
    }

    const addUserDetails = async () => {
        await addUser(user);
        navigate("/all");
    }
    return (
        <div>
            <FormGroup className={classes.container}>
                <Typography variant='h5'>Add User</Typography>
                <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input onChange={(e) => onChangeValue(e)} name="name" value={name} />
                </FormControl>
                <FormControl>
                    <InputLabel>Username</InputLabel>
                    <Input onChange={(e) => onChangeValue(e)} name="username" value={username} />
                </FormControl>
                <FormControl>
                    <InputLabel>Email</InputLabel>
                    <Input onChange={(e) => onChangeValue(e)} name="email" value={email} />
                </FormControl>
                <FormControl>
                    <InputLabel>Phone</InputLabel>
                    <Input onChange={(e) => onChangeValue(e)} name="phone" value={phone} />
                </FormControl>
                <Button onClick={() => addUserDetails()} variant="contained" color="primary">Add User</Button>
            </FormGroup>
        </div>
    );
};

export default AddUser;