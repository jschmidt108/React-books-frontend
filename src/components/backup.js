
<>
{/* ///////////////////////////////////////////////////////////////////////////// */}
{/* ///////////////////////////////////////////////////////////////////////////// */}


<h1>Book App Search</h1>
<form onSubmit={handleSubmit}>
    <input
        type="text" onChange={handleChange}
        placeholder="Search for books"
        autoComplete="off"
    />
    <button type="submit">
        Search
    </button>
</form>



<>
{/* ///////////////////////////////////////////////////////////////////////////// */}
{/* ///////////////////////////////////////////////////////////////////////////// */}
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div>

        <TextField id="outlined-search" label="Search field" type="search" />
        <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
        />
      </div>

    </Box>
</>

{/* ///////////////////////////////////////////////////////////////////////////// */}
{/* ///////////////////////////////////////////////////////////////////////////// */}
<OutlinedInput sx={{width: '100vw', mt: 10}} type="search" id="search"  placeholder="Look up Products" onChange={handleChange} />



{/* ///////////////////////////////////////////////////////////////////////////// */}
{/* ///////////////////////////////////////////////////////////////////////////// */}
    <Grid container spacing={4}>
        {result.map((book) => (
            <Grid item key={book} xs={12} sm={6} md={4}>
                <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                    <CardMedia
                        component="img"
                        sx={{
                            // 16:9
                            pt: '56.25%',
                        }}
                        image={book.volumeInfo.imageLinks.thumbnail}
                        alt={book.title}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2">
                            Heading
                        </Typography>
                        <Typography>
                            This is a media card. You can use this section to describe the
                            content.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">View</Button>
                        <Button size="small">Edit</Button>
                    </CardActions>
                </Card>
            </Grid>
        ))}
    </Grid>


{/* ///////////////////////////////////////////////////////////////////////////// */}
{/* ///////////////////////////////////////////////////////////////////////////// */}

<Grid container spacing={4}>
                            {result.map((book) => (
                                <Grid item key={book} xs={12} sm={6} md={4}>
                                    <Card
                                        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                    >
                                        <CardMedia
                                            component="img"
                                            sx={{
                                                // 16:9
                                                pt: '56.25%',
                                            }}
                                            image={book.volumeInfo.imageLinks.thumbnail}
                                            alt={book.title}
                                        />
                                        <CardContent sx={{ flexGrow: 1 }}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Heading
                                            </Typography>
                                            <Typography>
                                                This is a media card. You can use this section to describe the
                                                content.
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small">View</Button>
                                            <Button size="small">Edit</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>


{/* ///////////////////////////////////////////////////////////////////////////// */}
{/* ///////////////////////////////////////////////////////////////////////////// */}


</>