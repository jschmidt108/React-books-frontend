import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import '../App.css';
// import { Routes, Route, Link } from "react-router-dom";

// view imports
// import Profile from './ViewProfile.js'
import Account from './ViewAccount.js'
import Main from './ViewMain.js'
// import ProfileAdd from './ProfileAdd.js'

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
import userEvent from '@testing-library/user-event';





const Profile = (props) => {

    const herokuUsersUrl = 'https://lit-spire-95226.herokuapp.com/api/useraccount'
    const localUsersUrl = 'http://localhost:8000/api/useraccount'

    let [display, setDisplay] = useState('past')


    const getPast = () => {
        setDisplay('past')
        axios
            // .get(localUsersUrl)
            .get(herokuUsersUrl + "/" + props.user.id)
            .then(
                (response) => props.setShelves(response.data.hasRead),
                // console.log(props.shelves),
                (err) => console.error(err)
            )
            .catch((error) => console.error(error))
    }

    const handleAddPast = (addRead) => {
        axios
            .post(herokuUsersUrl + "/" + props.user.id, addRead)
            .then((response) => {
                console.log(response)
                props.setShelves([...props.shelves, addRead])
            })
    }

    const getCurrent = () => {
        setDisplay('current')
        axios
            // .get(localUsersUrl)
            .get(herokuUsersUrl + "/" + props.user.id)
            .then(
                (response) => props.setShelves(response.data.isReading),
                // console.log(props.shelves),
                (err) => console.error(err)
            )
            .catch((error) => console.error(error))
    }

    const getFuture = () => {
        setDisplay('future')
        axios
            // .get(localUsersUrl)
            .get(herokuUsersUrl + "/" + props.user.id)
            .then(
                (response) => props.setShelves(response.data.toRead),
                // console.log(props.shelves),
                (err) => console.error(err)
            )
            .catch((error) => console.error(error))
    }


    useEffect(() => {
        if (display === 'past') {
            getPast()
        } else if (display === 'current') {
            getCurrent()
        } else if (display === 'future') {
            getFuture()
        }
    }, [])


    //////////////////////////////////////////////
    // functions - display
    //////////////////////////////////////////////

    //// Books Read /////
    const displayRead = () => {
        setDisplay('past')
    }

    //// Reading /////
    const displayReading = () => {
        setDisplay('current')
    }

    //// To Read /////
    const displayToRead = () => {
        setDisplay('future')
    }



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
                                tsundoku
                            
                            </Typography>
                            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                                <Button onClick={mainView} sx={{ color: '#fff' }}>
                                    Home
                                </Button>
                                <Button onClick={libraryView} sx={{ color: '#fff' }} >
                                    Library
                                    {/* <NavLink to ="/mybooks">My Books</NavLink> */}
                                </Button>
                                <Button onClick={profileView} sx={{ color: '#fff' }} >
                                    My Shelves
                                    {/* <NavLink to ="/mybooks">My Books</NavLink> */}
                                </Button>
                                {/* <Button onClick={accountView} sx={{ color: '#fff' }}>
                                    Settings
                                </Button> */}
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

                                <Stack
                                    sx={{ pt: 4 }}
                                    direction="row"
                                    spacing={2}
                                    justifyContent="center"
                                >
                                    <Button onClick={getPast} variant="contained">Read</Button>
                                    <Button onClick={getCurrent} variant="contained">Reading</Button>
                                    <Button onClick={getFuture} variant="contained">Want to Read</Button>

                                </Stack>

                            </Container>


                        </Box>

                        <Container sx={{ py: 8 }} maxWidth="md">
                        <Typography variant="h5" align="left" color="text.secondary" paragraph>
                                {props.user.name}'s Shelves
                                </Typography>
                            <Grid container spacing={4}>
                                {props.shelves.map((shelf) => (
                                        <Grid key={shelf.id} item xs={12} sm={6} md={4}>
                                            <Card
                                                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                            >
                                                <CardMedia
                                                    component="img"

                                                    image={shelf.cover_img}
                                                    alt="random"
                                                />
                                                <CardContent sx={{ flexGrow: 1 }}>
                                                    <Typography gutterBottom variant="h5" component="h2">
                                                        {shelf.title}

                                                    </Typography>
                                                    <Typography>
                                                        Author: {shelf.author_name}
                                                    </Typography>
                                                    <Typography>
                                                        Genre: {shelf.genre}
                                                    </Typography>
                                                    <Typography>
                                                        Pages: {shelf.page_count}
                                                    </Typography>
                                                    <Typography>
                                                        ISBN: {shelf.isbn}
                                                    </Typography>
                                                    <Typography>
                                                    Rating: {shelf.rating}
                                                </Typography>
                                            </CardContent>
                                        </Card>

                                        </Grid>
                                    ))}
                            </Grid>
                        </Container>
                        <Container>
                            <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
                                {/* <Button variant="outlined">
                                    <ProfileAdd 
                                    handleAddPast={handleAddPast} 
                                    />
                                    </Button> */}
                            </Typography>
                        </Container>
                        
 
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