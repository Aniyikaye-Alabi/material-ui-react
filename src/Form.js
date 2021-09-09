import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing(2),
  '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '300px',
      },
  '& .MuiButtonBase-root': {
        margin: theme.spacing(2),
      },
    },
  }));

const Form = ({ handleClose }) => {

    const classes = useStyles();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        console.log(firstName, lastName, email, password);
        handleClose();
    }
    return (
    <form onSubmit={handleSubmit} className={classes.root}>
        <TextField label="First Name" variant="filled" value={firstName} onChange={(e) => setFirstName((prev) => prev = e.target.value)} required />
        <TextField label="Last Name" variant="filled" value={lastName} onChange={(e) => setLastName((prev) => prev = e.target.value)} required />
        <TextField label="Email" variant="filled" type="email" value={email} onChange={(e) => setEmail((prev) => prev = e.target.value)} required />
        <TextField label="Password" variant="filled" type="password" value={password} onChange={(e) => setPassword((prev) => prev = e.target.value)} required />

        <div>
            <Button variant="contained" onClick={handleClose}>Cancel</Button>
            <Button type="submit" variant="contained" color="primary">Sign Up</Button>
        </div>
    </form>
    );
}
export default Form;