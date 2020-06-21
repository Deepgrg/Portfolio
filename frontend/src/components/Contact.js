import React, { useState } from 'react';
import FooterSocial from './FooterSocial';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import {
  TextField,
  Typography,
  Snackbar,
  Button,
  Container,
  Divider,
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import CircularProgress from '@material-ui/core/CircularProgress';
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#E8E1FE',
    '&:hover': {
      backgroundColor: '#C1B0F8',
      borderColor: '#C1B0F8',
    },
    '&:active': {
      backgroundColor: '#C1B0F8',
    },
    '&:focus': {
      backgroundColor: '#C1B0F8',
    },
  },
  typo: {
    fontFamily: 'Dancing Script',
  },
}));

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [status, setStatus] = useState(null);

  const snackbarHandler = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post('http://localhost:8000/api/contact/message', {
        name: name,
        email: email,
        subject: subject,
        message: message,
      })
      .then((res) => {
        setLoading(false);
        clearInputs();
        setOpenSnackbar(true);
        setStatus(true);
      })

      .catch((err) => {
        setLoading(false);
        setOpenSnackbar(true);
        setStatus(false);
      });
  };
  const classes = useStyles();
  const clearInputs = () => {
    setName('');
    setEmail('');
    setMessage('');
    setSubject('');
  };
  return (
    <Container component='main' maxWidth='xs'>
      <div className={classes.paper}>
        <Typography component='h2' variant='h5'>
          Contact Me
        </Typography>
        <Divider />
        <Typography component='h3' variant='h6' className={classes.typo}>
          I will Gladly answer you
        </Typography>
        <form className={classes.form}>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='name'
            value={name}
            onChange={(event) => setName(event.target.value)}
            label='Name'
            type='text'
            id='name'
            autoFocus
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            variant='outlined'
            margin='normal'
            fullWidth
            name='subject'
            label='Subject'
            type='text'
            id='subject'
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
          />
          <TextField
            id='message'
            label='Your Message'
            variant='outlined'
            multiline
            fullWidth
            rows={4}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />

          <Button
            fullWidth
            onClick={(e) => submitHandler(e)}
            variant='contained'
            className={classes.submit}
            startIcon={<SendIcon />}>
            Send Message
          </Button>
        </form>
        {loading ? <CircularProgress /> : null}
        <Snackbar
          open={openSnackbar}
          autoHideDuration={4000}
          onClose={snackbarHandler}>
          <MuiAlert
            onClose={snackbarHandler}
            color={status ? 'success' : 'error'}
            elevation={6}
            variant='filled'>
            {status ? 'Messaged succesfully' : 'Something went wrong'}
          </MuiAlert>
        </Snackbar>
      </div>
      <FooterSocial />
    </Container>
  );
};
export default Contact;
