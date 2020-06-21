import React from 'react';
import {
  Grid,
  Box,
  Typography,
  Card,
  CardMedia,
  CardHeader,
  CardContent,
  CardActions,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Image1 from '../images/avatar.png';
import VisibilityIcon from '@material-ui/icons/Visibility';
import GitHubIcon from '@material-ui/icons/GitHub';

const myProjects = [
  {
    projectTitle: 'Lorem Ipsum',
    projectSub: 'Lorem',
    projectImage: Image1,
    projectDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim iure accusamus praesentium error optio ',
  },
  {
    projectTitle: 'Lorem Ipsum',
    projectSub: 'Lorem',
    projectImage: Image1,
    projectDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim iure accusamus praesentium error optio ',
  },
  {
    projectTitle: 'Lorem Ipsum',
    projectSub: 'Lorem',
    projectImage: Image1,
    projectDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim iure accusamus praesentium error optio ',
  },
  {
    projectTitle: 'Lorem Ipsum',
    projectSub: 'Lorem',
    projectImage: Image1,
    projectDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim iure accusamus praesentium error optio ',
  },
  {
    projectTitle: 'Lorem Ipsum',
    projectSub: 'Lorem',
    projectImage: Image1,
    projectDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim iure accusamus praesentium error optio ',
  },
];

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  mainDiv: {
    margin: 0,
    padding: 0,
    paddingTop: '20px',
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

const Projects = () => {
  const classes = useStyles();
  return (
    <Box component='div' className={classes.mainDiv}>
      <Grid container>
        <Grid item xs={1} sm={2}></Grid>
        <Grid
          item
          container
          xs={10}
          sm={8}
          spacing={4}
          alignContent='center'
          alignItems='center'
          justify='center'>
          {myProjects.map((item, key) => {
            return (
              <Grid item xs={12} sm={6} md={4} key={key}>
                <Card className={classes.root}>
                  <CardHeader
                    title={item.projectTitle}
                    subheader={item.projectSub}
                  />
                  <CardMedia
                    className={classes.media}
                    image={item.projectImage}
                  />
                  <CardContent>
                    <Typography
                      variant='body2'
                      color='textSecondary'
                      component='p'>
                      {item.projectDescription}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      className={classes.btns}
                      color='default'
                      variant='contained'
                      startIcon={<VisibilityIcon />}>
                      Demo
                    </Button>
                    <Button
                      className={classes.btns}
                      color='default'
                      variant='contained'
                      startIcon={<GitHubIcon />}>
                      Code
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>

        <Grid item xs={1} sm={2}></Grid>
      </Grid>
    </Box>
  );
};

export default Projects;
