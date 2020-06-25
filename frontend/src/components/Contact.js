// core modules and third party modules
import React, { useState } from 'react';
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
import { useFormik } from 'formik';
import * as Yup from 'yup';

// project modules
import FooterSocial from './FooterSocial';

// CSS Rules
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

// Validating the input data using Yup
const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid Email Format'),
  subject: Yup.string().required('Required'),
  descriptionMessage: Yup.string(),
});

const Contact = () => {
  const formik = useFormik({
    // inital values of the form
    initialValues: {
      name: '',
      email: '',
      subject: '',
      descriptionMessage: '',
    },
    // task to perform when then form is submitted
    onSubmit: (values) => {
      setLoading(true);
      axios
        .post(
          'https://sheltered-escarpment-12995.herokuapp.com/api/contact/message',
          {
            name: values.name,
            email: values.email,
            subject: values.subject,
            message: values.message,
          }
        )
        .then((res) => {
          setLoading(false);
          formik.resetForm();
          setOpenSnackbar(true);
          setStatus(true);
        })

        .catch((err) => {
          setLoading(false);
          setOpenSnackbar(true);
          setStatus(false);
        });
    },
    // validating the form
    validationSchema,
  });

  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [status, setStatus] = useState(null);

  // to handle the sanckbar popup
  const snackbarHandler = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  const classes = useStyles();

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
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <TextField
            variant='outlined'
            margin='normal'
            required
            error={formik.errors.name && formik.touched.name ? true : false}
            fullWidth
            name='name'
            helperText={formik.errors.name}
            value={formik.values.name}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            label='Name'
            type='text'
            id='name'
            autoFocus
          />
          <TextField
            variant='outlined'
            margin='normal'
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            error={formik.errors.email && formik.touched.email ? true : false}
            helperText={formik.errors.email}
            autoComplete='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <TextField
            variant='outlined'
            margin='normal'
            fullWidth
            name='subject'
            label='Subject'
            required
            type='text'
            error={
              formik.errors.subject && formik.touched.subject ? true : false
            }
            helperText={formik.errors.subject}
            id='subject'
            value={formik.values.subject}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <TextField
            id='message'
            label='Your Message'
            name='descriptionMessage'
            variant='outlined'
            helperText={formik.errors.descriptionMessage}
            multiline
            fullWidth
            rows={4}
            value={formik.values.descriptionMessage}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <Button
            fullWidth
            type='submit'
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
