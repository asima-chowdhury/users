import { Button, FormControl, FormGroup, Input, InputLabel, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { editUser, getUsers } from '../Service/api';
import { useNavigate, useParams } from "react-router-dom";


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

const EditUser = () => {
    const [user, setUser] = useState(initialValues);
    const { name, username, email, phone } = user;
    const classes = useStyles();
    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        loadUserData();
    }, [])

    const loadUserData = async () => {
        const response = await getUsers(id);
        setUser(response.data);
    }

    const onChangeValue = (e) => {
        console.log(e.target.value, e.target.name);
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log(user);
    }

    const editUserDetails = async () => {
        await editUser(id, user);
        navigate("/all");
    }
    return (
        <div>
            <FormGroup className={classes.container}>
                <Typography variant='h5'>Edit User</Typography>
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
                <Button onClick={() => editUserDetails()} variant="contained" color="primary">Edit User</Button>
            </FormGroup>
        </div>
    );
};

export default EditUser;