import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import '../App.css';
// import { Routes, Route, Link } from "react-router-dom";

// view imports
import Account from './ViewAccount.js'
import Main from './ViewMain.js'
import Profile from './ViewProfile.js'

import BookAdd from './BookAdd.js'
import BookEdit from './BookEdit.js'

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
import Modal from '@mui/material/Modal'
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { OutlinedInput } from '@mui/material'

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';





const Library = (props) => {


    const herokuBooksUrl = 'https://lit-spire-95226.herokuapp.com/api/books'
    const localBooksUrl = 'http://localhost:8000/api/books'

    // let [books, setBooks] = useState([])
    const [query, setQuery] = useState("")

    //////////////////////////////////////////////
    // CRUD functions - books api
    //////////////////////////////////////////////

    ///////READ BOOKS//////////
    const getBooks = () => {
        axios
            // .get(localBooksUrl)
            .get(herokuBooksUrl)
            .then(
                (response) => props.setBooks(response.data),
                (err) => console.error(err)
            )
            .catch((error) => console.error(error))
    }

    ///////CREATE BOOKS//////////
    const handleCreate = (addBook) => {
        axios
            // .post(localBooksUrl, addBook)
            .post(herokuBooksUrl, addBook)
            .then((response) => {
                console.log(response)
                // getBooks()
                props.setBooks([...props.books, addBook])
            })
    }

    ///////UPDATE BOOK//////////
    const handleUpdate = (updateBook) => {
        console.log(updateBook.id)
        axios
            // .put(localBooksUrl + '/' + updateBook.id, updateBook)
            .put(herokuBooksUrl + '/' + updateBook.id, updateBook)
            .then((response) => {
                // getBooks()
                props.setBooks(props.books.map((book) => {
                    return book.id != response.data.id ? book : response.data
                }))

            })
    }

    ///////DELETE BOOK//////////
    const handleDelete = (deletedBook) => {
        axios
            // .delete(localBooksUrl + '/' + event.target.value)
            .delete(herokuBooksUrl + '/' + deletedBook.id)
            .then((response) => {
                props.setBooks(props.books.filter(book => book.id !== deletedBook.id))
            })
    }

    useEffect(() => {
        getBooks()
    }, [])

    //////////////////////////////////////////////
    // functions - related to scroll
    //////////////////////////////////////////////

    const booksRef = useRef()
    const scrollDown = () => {
        window.scrollTo({
            top: booksRef.current.offsetTop,
            behavior: 'smooth',
        });
    };

    //////////////////////////////////////////////
    // functions - related to search
    //////////////////////////////////////////////
    const handleChange = (e) => {
        e.preventDefault()
        setQuery(e.target.value);
      };

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
    } else if (props.view === 'profile') {
        return (
            <>
                <Profile />
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

                                <Stack
                                    sx={{ pt: 4 }}
                                    direction="row"
                                    spacing={2}
                                    justifyContent="center"
                                >
                                    <Button onClick={scrollDown} variant="contained">Browse Books</Button>

                                </Stack>

                            </Container>
                            </Box>

                            {/* /////////////////////// */}
                            {/* /////////////////////// */}
                            {/* Library  */}
                            {/* /////////////////////// */}
                            {/* /////////////////////// */}
                            {/* <OutlinedInput sx={{width: '100vw', mt: 10}} type="search" id="search"  placeholder="Search Library" onChange={handleChange} /> */}

                            <Container ref={booksRef} sx={{ py: 8 }} maxWidth="md">
                                <Grid container spacing={4}>
                                    {
                                        props.books.filter(findOne => {
                                            if (query == "") {
                                                return findOne
                                            } else if (findOne.name.toLowerCase().includes(query.toLowerCase())) {
                                                return findOne
                                            }

                                        }).map((book) => (
                                            <Grid key={book.id} item xs={12} sm={6} md={4}>
                                                <Card
                                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                                >
                                                    <CardMedia
                                                        component="img"

                                                        image={book.cover_img}
                                                        alt="random"
                                                    />
                                                    <CardContent sx={{ flexGrow: 1 }}>
                                                        <Typography gutterBottom variant="h5" component="h2">
                                                            {book.title}

                                                        </Typography>
                                                        <Typography>
                                                            Author: {book.author_name}
                                                        </Typography>
                                                        <Typography>
                                                            Genre: {book.genre}
                                                        </Typography>
                                                        <Typography>
                                                            Pages: {book.page_count}
                                                        </Typography>
                                                        <Typography>
                                                            ISBN: {book.isbn}
                                                        </Typography>
                                                        <Typography>
                                                            Rating: {book.rating}
                                                        </Typography>
                                                    </CardContent>
                                                    <CardActions>

                                                        {/* <Button>Delete</Button> */}
                                                        <Button onClick={() => handleDelete(book)} value={book.id}>Delete</Button>
                                                        <BookEdit 
                                                        handleUpdate={handleUpdate} 
                                                        book={book}
                                                        />

                                                    </CardActions>
                                                </Card>

                                            </Grid>
                                        ))}
                                </Grid>
                            </Container>
                            <Container>
                            <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
                                <Button variant="outlined">
                                    <BookAdd 
                                    handleCreate={handleCreate} 
                                    />
                                    </Button>
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

export default Library;