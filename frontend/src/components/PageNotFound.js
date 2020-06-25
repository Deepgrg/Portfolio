// core modules and third party modules
import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// project modules
import pageNotFound from '../images/pageNotFound.svg';

// CSS Rules
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
