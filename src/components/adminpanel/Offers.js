import React, { useState, useEffect } from 'react'
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
import {mainListItems} from './mainListItems';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';
function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Barter
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  const drawerWidth = 240;
  
  const useStyles = makeStyles((theme) => ({
    
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 240,
    },
    fixedHeight2: {
        height: 160,
      },
  }));
  
  export default function Offers() {
  
    const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const fixedHeightPaper2 = clsx(classes.paper, classes.fixedHeight2);
  return (
    
            <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
              {/* All Users */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Orders />
              </Paper>
            </Grid>
          </Grid>
          
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    
  );
}

