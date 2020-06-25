// core moudles and third party modules
import React from 'react';
import {
  Divider,
  IconButton,
  Card,
  Typography,
  CardContent,
  CardActions,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

// CSS Rules
const useStyles = makeStyles((theme) => ({
  typo: {
    fontFamily: 'Dancing Script',
  },
  root: {
    maxWidth: 450,
    backgroundColor: '#fafafa',
  },
  centered: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  btns: {
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
}));

const FooterSocial = () => {
  const classes = useStyles();
  return (
    <div>
      <Card
        className={classes.root}
        variant='elevation'
        elevation={0}
        align='center'>
        <Divider />
        <CardContent>
          <Typography variant='h6' component='p' className={classes.typo}>
            You can also Find me on social
          </Typography>
        </CardContent>
        <CardActions className={classes.centered}>
          <IconButton
            className={classes.btns}
            onClick={() => window.open('https://www.linkedin.com/', '_blank')}>
            <LinkedInIcon />
          </IconButton>
          <IconButton
            className={classes.btns}
            onClick={() =>
              window.open('https://www.facebook.com/deepgrg', '_blank')
            }>
            <FacebookIcon />
          </IconButton>
          <IconButton
            className={classes.btns}
            onClick={() => window.open('https://github.com/Deepgrg', '_blank')}>
            <GitHubIcon />
          </IconButton>
          <IconButton
            className={classes.btns}
            onClick={() =>
              window.open('https://twitter.com/SagunDip', '_blank')
            }>
            <TwitterIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default FooterSocial;
