// core modules and third party modules
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Drawer,
  AppBar,
  Toolbar,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Avatar,
  Divider,
  Typography,
  Box,
} from '@material-ui/core';
import { Home, ContactMail, Menu } from '@material-ui/icons';
import AppsIcon from '@material-ui/icons/Apps';
import PersonIcon from '@material-ui/icons/Person';
import { makeStyles } from '@material-ui/core/styles';

// project modules
import avatar from '../images/avatar.svg';

// CSS styles
const useStyles = makeStyles((theme) => ({
  Navbar: {
    backgroundColor: '#222',
  },
  mobileSliderContainer: {
    width: 200,
    background: '#222',
    height: '100%',
    // position: "fixed",
    // top
  },
  avatar: {
    margin: '0.5rem auto',
    display: 'block',
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: 'white',
  },
  pushLink: {
    flexGrow: 1,
  },

  // For Desktop View
  menuButton: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  navLinks: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'inline',
    },
  },
}));

// Nvaigation Items
const menuItems = [
  {
    listIcon: <Home />,
    listText: 'Home',
    listPath: '/',
  },
  {
    listIcon: <AppsIcon />,
    listText: 'Projects',
    listPath: '/projects',
  },
  {
    listIcon: <PersonIcon />,
    listText: 'About Me',
    listPath: '/aboutMe',
  },
  {
    listIcon: <ContactMail />,
    listText: 'Contact',
    listPath: '/contact',
  },
];

const Navbar = () => {
  const classes = useStyles();

  // for the mobile view
  const [mobileView, setMobileView] = useState({
    right: false,
  });
  const mobileViewHandler = (slider, open) => () => {
    setMobileView({ ...mobileView, [slider]: open });
  };

  // mapping the navigation items to create jsx
  const navLinks = menuItems.map((item, key) => {
    return (
      <Button
        key={key}
        component={Link}
        to={item.listPath}
        color='inherit'
        className={classes.navLinks}>
        {item.listText}
      </Button>
    );
  });

  // view on mobile
  const mobile = () => {
    return (
      <Box
        component='div'
        className={classes.mobileSliderContainer}
        onClick={mobileViewHandler('right', false)}>
        <Avatar
          src={avatar}
          alt='Dip Sagun Gurung'
          className={classes.avatar}
        />
        <Divider />
        <List>
          {menuItems.map((listItem, key) => {
            return (
              <ListItem
                key={key}
                button
                component={Link}
                to={listItem.listPath}>
                <ListItemIcon className={classes.listItem}>
                  {listItem.listIcon}
                </ListItemIcon>
                <ListItemText
                  className={classes.listItem}
                  primary={listItem.listText}
                />
              </ListItem>
            );
          })}
        </List>
      </Box>
    );
  };

  // Rendered contents
  return (
    <React.Fragment>
      {/* Mobile menu container */}
      <Drawer
        open={mobileView.right}
        onClose={mobileViewHandler('right', false)}>
        {mobile()}
      </Drawer>

      {/* Navigation Bar */}
      <Box component='nav'>
        <AppBar position='static' className={classes.Navbar}>
          <Toolbar>
            <IconButton
              color='inherit'
              className={classes.menuButton}
              onClick={mobileViewHandler('right', true)}>
              <Menu />
            </IconButton>
            <Typography
              variant='h5'
              color='inherit'
              className={classes.pushLink}>
              Portfolio
            </Typography>
            {navLinks}
          </Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  );
};

export default Navbar;
