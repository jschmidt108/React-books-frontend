import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import '../App.css';
// import { Routes, Route, Link } from "react-router-dom";

// view imports
// import Profile from './ViewProfile.js'
import Account from './ViewAccount.js'
import Main from './ViewMain.js'

// import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';





const Profile = (props) => {




    //////////////////////////////////////////////
    // functions - navigation
    //////////////////////////////////////////////

    //// Home - main view /////
    const mainView = () => {
        props.setView('main')
    }

    //// Library - all books view /////
    const libraryView = () => {
        props.setView('library')
    }

    //// My Books - profile view /////
    const profileView = () => {
        props.setView('profile')
    }


    //// Settings - account/user view /////
    const accountView = () => {
        props.setView('account')
    }

    //////////////////////////////////////////////
    // functions - related to styling
    //////////////////////////////////////////////

    function Copyright() {
        return (
            <Typography variant="body2" color="text.secondary" align="center">
                {'Copyright © '}
                {/* <Link color="inherit" href="https://mui.com/"> */}
                tsundoku
                {/* </Link>{' '} */}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        );
    }


    const theme = createTheme();

    //////////////////////////////////////////////
    // the return 
    //////////////////////////////////////////////

    if (props.view === 'main') {
        return (
            <>
                <Main />
            </>
        )
    } else if (props.view === 'account') {
        return (
            <>
                <Account />
            </>
        )
    } else 
        return (

            <>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <AppBar component="nav">
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                // onClick={handleDrawerToggle}
                                sx={{ mr: 2, display: { sm: 'none' } }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography
                                variant="h5"
                                component="div"
                                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                            >
                                <Button 
                                onClick={mainView} 
                                variant="h5"
                                component="div"
                                // sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                                >
                                tsundoku
                                    {/* <NavLink to ="/">Home</NavLink> */}
                                </Button>
                            
                            </Typography>
                            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                                {/* <Button onClick={mainView} sx={{ color: '#fff' }}>
                                    Home
                                </Button> */}
                                <Button onClick={libraryView} sx={{ color: '#fff' }} >
                                    Library
                                    {/* <NavLink to ="/mybooks">My Books</NavLink> */}
                                </Button>
                                <Button onClick={profileView} sx={{ color: '#fff' }} >
                                    My Shelves
                                    {/* <NavLink to ="/mybooks">My Books</NavLink> */}
                                </Button>
                                <Button onClick={accountView} sx={{ color: '#fff' }}>
                                    Settings
                                    {/* <NavLink to ="/settings">Settings</NavLink> */}
                                </Button>
                            </Box>

                        </Toolbar>

                    </AppBar>
                    <main>
                        {/* <Route path="/mybooks" component={Profile}/> */}
                        {/* Hero unit */}
                        <Box
                            sx={{
                                bgcolor: 'background.paper',
                                pt: 8,
                                pb: 6,
                            }}
                        >
                            <Container maxWidth="sm">
                                <Typography
                                    component="h1"
                                    variant="h1"
                                    align="left"
                                    color="text.primary"
                                    gutterBottom
                                >
                                    tsundoku
                                    <Typography variant="h8" align="right" color="text.secondary" paragraph>
                                        tsUn-dO-kU
                                    </Typography>
                                </Typography>
                                <Typography variant="h8" align="right" color="text.primary" paragraph>
                                    (tsoon-doh-koo)
                                </Typography>
                                <Typography variant="h7" align="left" color="text.secondary" paragraph>
                                    (n.) buying books and not reading them; letting books pile up unread
                                    on shelves or floors or nightstands
                                </Typography>
                                <Typography variant="h5" align="left" color="text.secondary" paragraph>
                                User Profile
                                </Typography>

                            </Container>


                        </Box>



 
                    </main>
                    {/* Footer */}
                    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
                        <Copyright />
                    </Box>
                    {/* End footer */}
                </ThemeProvider>
            </>
        )
    

}

export default Profile;