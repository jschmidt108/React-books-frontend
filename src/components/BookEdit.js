//////////////////////////////////////////////
//import
//////////////////////////////////////////////

import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'

import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
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
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Modal from '@mui/material/Modal'
import { FormControl, FormLabel, FormGroup, TextField, OutlinedInput } from '@mui/material'


const BookEdit = (props) => {

    //////States//////
    const [book, setBook] = useState({ ...props.book })



    /////Functions///////
    const handleChange = (event) => {
        // console.log(event);
        setBook({ ...book, [event.target.name]: event.target.value })
    }



    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleUpdate(book)
    }

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 100,
        bgcolor: 'background.paper',
        boxShadow: 20,
        p: 4
    };

    return (
        <>
            <Button onClick={handleOpen}>EDIT</Button>
            <Modal
                hideBackdrop
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
        <div>

        <input className='submit' type="submit" value='submit'/>
                <Box sx={{ ...style, width: 400, height: 'auto' }}>

                    <form onSubmit={handleSubmit}>
                        <FormControl sx={{ ml: '20%', height: 'auto' }}>
                            <FormLabel htmlFor="cover_img">Cover Image: </FormLabel>
                            <OutlinedInput sx={{height: 30}} type="url" name="cover_img" value={book.cover_img} onChange={handleChange}/>

                            <FormLabel htmlFor="title">Title: </FormLabel>
                            <OutlinedInput sx={{height: 30}} type="text" name="title" value={book.title} onChange={handleChange}/>

                            <FormLabel htmlFor="author_name">Author: </FormLabel>
                            <OutlinedInput sx={{height: 30}}type="text" name="author_name" value={book.author_name} onChange={handleChange}/>
                        
                            <FormLabel htmlFor="genre">Genre: </FormLabel>
                            <OutlinedInput sx={{height: 30}} type="text" name="genre" value={book.genre} onChange={handleChange}/>

                            <FormLabel htmlFor="page_count">Pages: </FormLabel>
                            <OutlinedInput sx={{height: 30}} type="number" name="page_count" value={book.page_count} onChange={handleChange}/>

                            <FormLabel htmlFor="isbn">ISBN: </FormLabel>
                            <OutlinedInput sx={{height: 30}} type="text" name="isbn" value={book.isbn} onChange={handleChange}/>

                            <FormLabel htmlFor="rating">Rating: </FormLabel>
                            <OutlinedInput sx={{height: 30}} type="number" name="rating" value={book.rating} onChange={handleChange}/>


                            <Button type="submit">Submit</Button>
                        </FormControl>
                    </form>

                    <Button onClick={handleClose}>Close</Button>


                </Box>
            </div>
            </Modal>
        </>
    )
}

export default BookEdit