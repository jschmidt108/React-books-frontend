import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import '../App.css';
import { Routes, Route, Link } from "react-router-dom";

// view imports
import Library from './ViewLibrary.js'
import Profile from './ViewProfile.js'
import Account from './ViewAccount.js'

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
// import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';





const Main = (props) => {

    const [book, setBook] = useState("")
    const [result, setResult] = useState([])
    const [apiKey, setApiKey] = useState("AIzaSyBve9w79Xx2P5uFzsVwxXLNiKvEE3vd4fw")


    //////////////////////////////////////////////
    // functions - get user search results
    //////////////////////////////////////////////

    const handleChange = (event) => {
        const book = event.target.value
        setBook(book)

    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // console.log(book)
        axios
            .get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + apiKey + "&maxResults=40")
            .then(data => {
                console.log(data)
                setResult(data.data.items)
            })
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

    if (props.view === 'profile') {
        return (
            <>
                <Profile 
                users={props.users} setUsers={props.setUsers} 
                user={props.user} setUser={props.setUser} 
                view={props.view} setView={props.setView} 
                // loginStatus={loginStatus} setLoginStatus={setLoginStatus}
                />
            </>
        )
    } else if (props.view === 'account') {
        return (
            <>
                <Account 
                users={props.users} setUsers={props.setUsers} 
                user={props.user} setUser={props.setUser} 
                view={props.view} setView={props.setView} 
                // loginStatus={loginStatus} setLoginStatus={setLoginStatus}
                />
            </>
        )
    } else if (props.view === 'library') {
        return (
            <>
                <Library
                users={props.users} setUsers={props.setUsers} 
                user={props.user} setUser={props.setUser} 
                view={props.view} setView={props.setView} 
                // loginStatus={loginStatus} setLoginStatus={setLoginStatus}
                />
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
                                    My Books
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

                            </Container>


                        </Box>


                        <Container sx={{ py: 0 }} maxWidth="md">
                            {/* End hero unit */}

                            <Box
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': { m: 1, width: '90ch' },
                                }}
                                noValidate
                                autoComplete="off"
                                onSubmit={handleSubmit}
                            >
                                <div>

                                    <TextField id="outlined-search" label="Search for books" type="search" onChange={handleChange} />

                                </div>

                            </Box>

                        </Container>
                        {/* //////////////////////// */}
                        {/* google API - user search */}
                        {/* //////////////////////// */}
                        <Container maxWidth="sm">
                            <div className='searchResults'>
                                <Box sx={{ width: 500, height: 400, overflowY: 'scroll' }}>
                                    <ImageList variant="masonry" cols={3} gap={8}>
                                        {result.map((book) => (
                                            <ImageListItem key={book.id}>
                                                <img
                                                    src={`${book.volumeInfo.imageLinks.thumbnail}?w=248&fit=crop&auto=format`}
                                                    srcSet={`${book.volumeInfo.imageLinks.thumbnail}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                                    alt={book.title}
                                                    loading="lazy"
                                                />
                                            </ImageListItem>
                                        ))}
                                    </ImageList>
                                </Box>
                            </div>
                        </Container>

                        {/* //////////////////////// */}
                        {/* google API - trending */}
                        {/* //////////////////////// */}
                        {/* <Container maxWidth="sm">
                            <div className='searchResults'>
                                <Box sx={{ width: 500, height: 400, overflowY: 'scroll' }}>
                                    <ImageList variant="masonry" cols={3} gap={8}>
                                        {result.map((trending) => (
                                            <ImageListItem key={trending.id}>
                                                <img
                                                    src={`${trending.volumeInfo.imageLinks.thumbnail}?w=248&fit=crop&auto=format`}
                                                    srcSet={`${trending.volumeInfo.imageLinks.thumbnail}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                                    alt={trending.title}
                                                    loading="lazy"
                                                />
                                            </ImageListItem>
                                        ))}
                                    </ImageList>
                                </Box>
                            </div>
                        </Container> */}


                        {/* //////////////////////// */}
                        {/* google API - mystery */}
                        {/* //////////////////////// */}
                        {/* <Container maxWidth="sm">
                            <div className='searchResults'>
                                <Box sx={{ width: 500, height: 400, overflowY: 'scroll' }}>
                                    <ImageList variant="masonry" cols={3} gap={8}>
                                        {result.map((mystery) => (
                                            <ImageListItem key={mystery.id}>
                                                <img
                                                    src={`${mystery.volumeInfo.imageLinks.thumbnail}?w=248&fit=crop&auto=format`}
                                                    srcSet={`${mystery.volumeInfo.imageLinks.thumbnail}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                                    alt={mystery.title}
                                                    loading="lazy"
                                                />
                                            </ImageListItem>
                                        ))}
                                    </ImageList>
                                </Box>
                            </div>
                        </Container> */}
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

export default Main;