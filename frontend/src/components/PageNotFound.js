import React from 'react';
import pageNotFound from '../images/pageNotFound.svg';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  cont: {
    marginTop: '80px',
    display: 'flex',
    justifyContent: 'center',
    overflow: 'hidden',
  },
});

const PageNotFound = () => {
  const classes = useStyles();
  return (
    <Container fixed className={classes.cont}>
      <img src={pageNotFound} alt='Page not found' />
    </Container>
  );
};

export default PageNotFound;
