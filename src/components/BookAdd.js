import React, { useState, useEffect } from 'react'
import { FormControl, FormLabel, FormGroup,TextField, OutlinedInput, Input} from '@mui/material'

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


const BookAdd = (props) => {

	//////States//////
  let emptyBook = { cover_img: '', title: '', author_name: '', genre: '', page_count: '', isbn: '', rating: ''}
  const [book, setBook] = useState(emptyBook)



	/////Functions///////
const handleChange = (event) => {
	// console.log(event);
  	setBook({ ...book, [event.target.name]: event.target.value })
}



const handleSubmit = (event) => {
  event.preventDefault()
  // console.log(book)
  props.handleCreate(book)
  setBook({cover_img: '', title: '', author_name: '', genre: '', page_count: '', isbn: '', rating: '' })
}

    return (
        <>
            <details>
                <summary>Add to Library</summary>
                <form onSubmit={handleSubmit} className='createForm'>

                    <FormGroup align='left' sx={{ height: 'auto', width: '80vw' }}>
                        <FormLabel htmlFor="cover_img">Cover Image: </FormLabel>
                        <Input sx={{ height: 30 }} type="url" name="cover_img" value={book.cover_img} onChange={handleChange} />

                        <FormLabel htmlFor="title">Title: </FormLabel>
                        <Input sx={{ height: 30 }} type="text" name="title" value={book.title} onChange={handleChange} />

                        <FormLabel htmlFor="author_name">Author: </FormLabel>
                        <Input sx={{ height: 30 }} type="text" name="author_name" value={book.author_name} onChange={handleChange} />

                        <FormLabel htmlFor="genre">Genre: </FormLabel>
                        <Input sx={{ height: 30 }} type="text" name="genre" value={book.genre} onChange={handleChange} />

                        <FormLabel htmlFor="page_count">Pages: </FormLabel>
                        <Input sx={{ height: 30 }} type="number" name="page_count" value={book.page_count} onChange={handleChange} />

                        <FormLabel htmlFor="isbn">ISBN: </FormLabel>
                        <Input sx={{ height: 30 }} type="text" name="isbn" value={book.isbn} onChange={handleChange} />

                        <FormLabel htmlFor="rating">Rating: </FormLabel>
                        <Input sx={{ height: 30 }} type="number" name="rating" value={book.rating} onChange={handleChange} />

                        <input className='submit' type="submit" value='submit' />

                    </FormGroup>
                </form>
            </details>
        </>
    )
}

export default BookAdd