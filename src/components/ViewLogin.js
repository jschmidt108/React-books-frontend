//////////////////////////////////////////////
//import
//////////////////////////////////////////////

// general imports
import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'

// view imports
import Signup from './ViewSignup.js'
import Main from './ViewMain.js'
import Profile from './ViewProfile.js'
import Account from './ViewAccount.js'

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
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const Login = (props) => {
    //////////////////////////////////////////////
    //states
    //////////////////////////////////////////////

    // general states

    const [user, setUser] = useState({ ...props.user })
    // const [member, setMember] = useState({...props.member})


    // local vs heroku links - deploy with heroku
    const herokuUsersUrl = 'https://lit-spire-95226.herokuapp.com/api/useraccount'
    const localUsersUrl = 'http://localhost:8000/api/useraccount'

    const herokuLoginUrl = 'https://lit-spire-95226.herokuapp.com/api/useraccount/login'
    const localLoginUrl = 'http://localhost:8000/api/useraccount/login'


    //////////////////////////////////////////////
    // functions - returning user form
    //////////////////////////////////////////////

    const handleChange = (event) => {
        // console.log(event);
        setUser({ ...user, [event.target.name]: event.target.value })
        //setMember({ ...member, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // console.log(user)
        handleUpdateUser(user)
        //handleUpdateUser(member)
    }

    ////////////////////////////////////////////////////////////
    // CRUD Functionality - USERS (api/useraccount/login)
    //      // returning user login
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



    // returning user login
    const handleUpdateUser = (userLogin) => {
        axios
            // .put(localLoginUrl, userLogin)
            .put(herokuLoginUrl, userLogin)

            .catch((error) => {
                if (error) {
                    alert("Email or password does not match records")
                    // setLoginError(true)
                }
            })
            .then((response) => {
                // console.log(userLogin)
                console.log(response.data)
                props.setUser(response.data)
                props.setLoginStatus(true)
                // console.log(response)
                // props.setCurrentUserID(response.data.id)
                // props.setCurrentUser(response.data.name)
                // props.setCurrentUser(response.data.username)
                // props.setView('main')
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


    ////Signup view - new user/////
    const signupView = () => {
        props.setView('signup')
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
    if (props.loginStatus === false) {

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
                                    Sign in
                                </Typography>
                                <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        autoFocus
                                        value={user.email}
                                        //value={props.user.email}
                                        //value={member.email}
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
                                        value={user.password}
                                        //value={props.user.password}
                                        //value={member.password}
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
                                        Sign In
                                    </Button>
                                    <Grid container>
                                        <Grid item>
                                            <Typography gutterBottom component="h2"
                                                variant="subtitle1"
                                                color="text.secondary">
                                                Don't have an account? <Button variant="text" onClick={signupView}>Sign Up</Button>
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
    } else if (props.loginStatus === true) {
        return (
            <>
                <Main/>
            </>
        )
    } else if (props.view === 'profile') {
        <>
            <Profile/>
        </>
    } else if (props.view=== 'profile') {
        <>
            <Account/>
        </>
    }
}



export default Login;