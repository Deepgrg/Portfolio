// core modules and third party modules
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Card,
  Avatar,
  CardContent,
  Collapse,
  CardActions,
  Box,
  IconButton,
} from '@material-ui/core';
import clsx from 'clsx';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// project modules
import Profile from '../images/ProfileMe.jpg';
import FooterSocial from './FooterSocial';

// CSS Rules
const useStyles = makeStyles((theme) => ({
  layout: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cont: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing(3),
  },
  root: {
    maxWidth: 450,
    backgroundColor: '#fafafa',
  },
  avatar: {
    width: theme.spacing(17),
    height: theme.spacing(17),
    float: 'right',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  typo: {
    fontFamily: 'Dancing Script',
  },
  typoSub: {
    textDecoration: 'underline',
    textDecorationColor: '#5B26FF',
    fontWeight: 'bold',
  },
}));

const AboutMe = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  // to handle the expand more button
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div className={classes.layout}>
      <Box className={classes.cont} component='div'>
        <Card
          className={classes.root}
          variant='elevation'
          elevation={0}
          align='center'>
          <CardContent>
            <Typography
              gutterBottom
              variant='h4'
              component='h2'
              className={classes.typo}>
              Wow, A whole page just about me!
            </Typography>
          </CardContent>
          <Avatar src={Profile} alt='me' className={classes.avatar} />
          <CardContent>
            <Typography variant='h6' component='p' className={classes.typoSub}>
              Developer, Nepali, Namaste!
            </Typography>
            <Typography variant='subtitle1' component='p'>
              My name is Dip Sagun Gurung. I create websites and my weapon of
              choice is ReactJS and NodeJs. I enjoy coding, music, adventure &
              slice_of_Life genre. Learning new is the thing that excites me the
              most . Bleeding edge trends and tech -or- historic facts there is
              always something for everyone.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label='show more'>
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout='auto' unmountOnExit>
            <CardContent>
              <Typography variant='subtitle1' component='p'>
                More About Me? I am Human.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </Box>
      <FooterSocial />
    </div>
  );
};

export default AboutMe;
