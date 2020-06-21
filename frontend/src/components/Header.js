import React from 'react';
import { Typography, ButtonBase, Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Me from '../images/Me.svg';
import Typed from 'react-typed';

const useStyles = makeStyles((theme) => ({
  image: {
    width: 180,
    height: 180,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  box: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    textAlign: 'center',
    zIndex: 1,
  },
  typo: {
    fontFamily: 'Dancing Script',
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <Grid
        container
        alignContent='center'
        alignItems='center'
        justify='center'>
        <Grid item xs={2} />
        <Grid item xs={2} align='center'>
          <Typography variant='h3' className={classes.typo}>
            <Typed strings={['Hi!']} showCursor={false} typeSpeed={50} />
          </Typography>
        </Grid>
        <Grid item xs={6} align='center'>
          <ButtonBase className={classes.image}>
            <img className={classes.img} src={Me} alt='Dip Sagun Gurung' />
          </ButtonBase>
        </Grid>
        <Grid item xs={2} />
      </Grid>

      <br />
      <Typography variant='h3' className={classes.typo}>
        <Typed
          strings={['I am a fullstack developer.']}
          showCursor={false}
          typeSpeed={80}
        />
      </Typography>
    </Box>
  );
};

export default Header;
