import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles, FormControl } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Summary from './Summary';
import Details from './Details';

const useStyles = makeStyles((theme) => ({
  formControl: {
    flexGrow: 1,
    minWidth: 240,
  },
  summaryPaper: {
    width: 260,
    border: "1px solid brown",
    margin: "auto",
    "word-wrap": "break-word"
  },
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

function Request () {
  const classes = useStyles();
  const defaultEvent = {
    title: "Event Title",
    organisation: "Organisation",
    thumbnail: "https://sites.google.com/a/nussu.org.sg/nus-students-union/_/rsrc/1596393583193/030820/rnf_thumbnail.png",
    description: "Be a donor with NUSSU Rag & Flag today! 🥰🥰",
    date: "15 AUG - 17 AUG 2020",
    time: "8:30 AM - 4:20 PM",
    link: "https://bit.ly",
    deadline: "24 AUG 2020 (MON), 5:00 PM",
    poster: "https://sites.google.com/a/nussu.org.sg/nus-students-union/_/rsrc/1596393578365/030820/rnf_poster.png",
    posterLink: "https://bit.ly",
    text: "Please refer to {WhatsApp's text formatting guide}<https://faq.whatsapp.com/general/chats/how-to-format-your-messages/> for information on how to format for *bold*, _italics_ and ~strikethroughs~! \n\n Additionally, use \"{any text}<your_url>\" to create a clickable link. \n(Note that the URL must be valid and must include the *http://* or *https://* header)"
  }
  const [event, setEvent] = useState(defaultEvent);
  const { register, handleSubmit, errors, setError } = useForm();
  const onSubmit = data => {
    const newEvent = Object.assign({}, data, {
      thumbnail: data.thumbnail[0] ? URL.createObjectURL(data.thumbnail[0]) : "",
      poster: data.poster[0] ? URL.createObjectURL(data.poster[0]) : ""
    })
    setEvent(newEvent);
    console.log(data.text == "\n");
  }

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Container>
            <Summary event={event}/>
          </Container>
        </Grid>
        <Grid item xs={12} md={6}>
        <div className={classes.paper}>
        <Avatar className={classes.avatar}>
        </Avatar>
        <Typography component="h1" variant="h5">
          Event Info
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                id="title"
                label="Event Title"
                name="title"
                inputRef={register()}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                name="organisation"
                label="Organisation"
                id="organisation"
                inputRef={register()}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>
                Thumbnail Image (230px height x 150px width)
              </Typography>
              <input name="thumbnail" type="file" accept="image/*" ref={register}/>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="standard"
                multiline
                required
                fullWidth
                name="description"
                label="Description"
                id="description"
                inputRef={register()}
                helperText="Max 20 words"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="standard"
                fullWidth
                name="date"
                label="Date"
                id="date"
                inputRef={register()}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="standard"
                fullWidth
                name="time"
                label="Time"
                id="time"
                inputRef={register()}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="standard"
                fullWidth
                name="venue"
                label="Venue"
                id="venue"
                inputRef={register()}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="standard"
                fullWidth
                name="deadline"
                label="Deadline"
                id="deadline"
                inputRef={register()}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="standard"
                fullWidth
                name="link"
                label="Link"
                id="link"
                inputRef={register()}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>
                Poster Image (600px width, unrestricted height)
              </Typography>
              <input name="poster" type="file" accept="image/*" ref={register}/>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="standard"
                fullWidth
                name="posterLink"
                label="Poster Link"
                id="posterLink"
                inputRef={register()}
                helperText="Clicking on the poster will bring the reader to this link"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="standard"
                multiline
                fullWidth
                name="text"
                label="Long Text"
                id="text"
                inputRef={register()}
                helperText="Max 100 words. Press 'enter' to add line breaks and refer to the example text below for information on how to format."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Update
          </Button>
        </form>
      </div>
        </Grid>
      </Grid>
      <Details event={event} />
    </Container>
  )
}

export default Request;