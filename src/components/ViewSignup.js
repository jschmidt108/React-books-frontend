//////////////////////////////////////////////
//import
//////////////////////////////////////////////

// general imports
import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'

// import styling
// import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const Signup = (props) => {
    //////////////////////////////////////////////
    //states
    //////////////////////////////////////////////

    // general states

    // local vs heroku links - deploy with heroku
    const herokuUsersUrl = 'https://lit-spire-95226.herokuapp.com/api/useraccount'
    const localUsersUrl = 'http://localhost:8000/api/useraccount'

    //////////////////////////////////////////////
    // functions - creating a new user form
    //////////////////////////////////////////////

    const handleChange = (event) => {
        // console.log(event);
        props.setUser({ ...props.user, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // console.log(user)
        userSignup(props.user)
        props.setUser({ name: '', username: '', email: '', password: '', hasRead: [], isReading: [], toRead: []  })
    }


    ////////////////////////////////////////////////////////////
    // CRUD Functionality - USERS (api/useraccount)
    //      // new user login
    ////////////////////////////////////////////////////////////


    ////Fetching users/////////
    const getUsers = () => {
        axios
            // .get(localUsersUrl)
            .get(herokuUsersUrl)
            .then(
                (response) => props.setUsers(response.data),
                (err) => console.error(err)
            )
            .catch((error) => console.error(error))
    }


    /////CREATE USER - new user login //////////
    const userSignup = (addUser) => {
        axios
            // .post(localUsersUrl, addUser)
            .post(herokuUsersUrl, addUser)
            .then((response) => {
                // console.log(response)
                // getUsers()
                props.setUsers([...props.users, addUser])
                props.setView('login')
            })
    }


    //////////////////////////////////////////////
    // useEffect
    //////////////////////////////////////////////

    useEffect(() => {
        getUsers()
    }, [])


    //////////////////////////////////////////////
    // functions - related to login
    //////////////////////////////////////////////

    ////Login view - returning user/////
    const loginView = () => {
        props.setView('login')
    }

    //////////////////////////////////////////////
    // functions - related to scroll
    //////////////////////////////////////////////



    //////////////////////////////////////////////
    // functions - related to styling
    //////////////////////////////////////////////

    function Copyright() {
        return (
            <Typography variant="body2" color="text.secondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://mui.com/">
                tsundoku
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        );
    }

    const theme = createTheme();

    //////////////////////////////////////////////
    // the return - skeleton
    //////////////////////////////////////////////


    return (
        <>
            <ThemeProvider theme={theme}>
                <Grid container component="main" sx={{ height: '100vh' }}>
                    <CssBaseline />
                    <Grid
                        item
                        xs={false}
                        sm={4}
                        md={7}
                        sx={{
                            // backgroundImage: 'url(https://source.unsplash.com/random)',
                            backgroundImage: 'url(https://i.imgur.com/Zuot1Q2.png)',
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: (t) =>
                                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                        <Box
                            sx={{
                                my: 8,
                                mx: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign up
                            </Typography>
                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Name"
                                    name="name"
                                    autoComplete="name"
                                    autoFocus
                                    value={props.user.name}
                                    onChange={handleChange}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="username"
                                    label="Username"
                                    name="username"
                                    autoComplete="username"
                                    autoFocus
                                    value={props.user.username}
                                    onChange={handleChange}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    value={props.user.email}
                                    onChange={handleChange}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    value={props.user.password}
                                    onChange={handleChange}
                                />
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Sign Up
                                </Button>
                                <Grid container>
                                    <Grid item>
                                        <Typography gutterBottom component="h2"
                                            variant="subtitle1"
                                            color="text.secondary">
                                            Already have an account? <Button variant="text" onClick={loginView}>Sign In</Button>
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Copyright sx={{ mt: 5 }} />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </>
    )
}



export default Signup;