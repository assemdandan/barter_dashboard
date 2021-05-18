import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
    BrowserRouter as ReactRouter,
    Route,
    Switch
} from "react-router-dom";
import Signin from '../../components/auth/signin';
import Signup from '../../components/auth/signup';
import Dashboard from '../../components/adminpanel/dashboard';
import Users from '../../components/adminpanel/Users';
import Items from '../../components/adminpanel/Items';
import Services from '../../components/adminpanel/Services';
import Events from '../../components/adminpanel/Events';
import Offers from '../../components/adminpanel/Offers';
import Claims from '../../components/adminpanel/Claims';
import { Card, CardContent, Grid, Typography, InputAdornment, TextField, IconButton, Button, LinearProgress } from '@material-ui/core';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {mainListItems} from '../../components/adminpanel/mainListItems';

const drawerWidth = 240;
  
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    toolbar: {
      paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    menuButtonHidden: {
      display: 'none',
    },
    title: {
      flexGrow: 1,
    },
    drawerPaper: {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerPaperClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    },
    
  }));
  
const Router = () => {
    const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  function capitalizeFirstLetter(string) {
    return string. charAt(0). toUpperCase() + string. slice(1);
    }
    const [pagetitle,setPagetitle] = useState(capitalizeFirstLetter((window.location.pathname).slice(1)));
   
    const selector = useSelector(state => state.auth);
    useEffect(() => {
        setPagetitle(capitalizeFirstLetter((window.location.pathname).slice(1)));
      },)
    return (
        
        <ReactRouter>
            
            <Switch>
                
                <Route exact path="/signin"><Signin /></Route>
                <Route exact path="/signup"><Signup /></Route>
                <div className={classes.root}>
            <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
          Barter {pagetitle}
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        
      </Drawer>
                <Route exact path="/"><Dashboard /></Route>
                <Route exact path="/users"><Users /></Route>
                <Route exact path="/items"><Items /></Route>
                <Route exact path="/services"><Services /></Route>
                <Route exact path="/events"><Events /></Route>
                <Route exact path="/offers"><Offers /></Route>
                <Route exact path="/claims"><Claims /></Route>
                </div>
            </Switch>
            
        </ReactRouter>
    );
}

export default Router;