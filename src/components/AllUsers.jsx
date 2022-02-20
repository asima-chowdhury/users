import React, { useEffect, useState } from 'react';
import { getUsers } from '../Service/api';
import { Table, TableHead, TableRow, TableCell, TableBody, makeStyles, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 0 50px',
    },
    thead: {
        '& > *': {
            background: '#000000',
            color: '#ffffff',
            fontSize: 15,
        }
    },
    row: {
        '& > *': {
            fontSize: 15,
        }
    }
});

const AllUsers = () => {

    const [users, setUsers] = useState([]);

    const classes = useStyles();

    useEffect(() => {
        getAllUsers();
    }, [])

    const getAllUsers = async () => {
        const response = await getUsers();
        /*console.log(response.data);*/
        setUsers(response.data);
    }

    return (
        <div>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow className={classes.thead}>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        users.map(user => (
                            <TableRow key={user.id} className={classes.row}>
                                <TableCell>{user.id}</TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.username}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.phone}</TableCell>
                                <TableCell>
                                    <Button variant="contained" color="primary" style={{ marginRight: 10 }} component={Link} to={`/edit/${user.id}`}>Edit</Button>
                                    <Button variant="contained" color="secondary">Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    );
};

export default AllUsers;