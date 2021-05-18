import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import BuildIcon from '@material-ui/icons/Build';
import EventIcon from '@material-ui/icons/Event';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import {Link} from "react-router-dom";
export const mainListItems = (
  
  <div>
    <Link to="/dashboard" style={{textDecoration:"none"}}>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" style={{color:"black"}}/>
    </ListItem>
    </Link>
    <Link to="/users" style={{textDecoration:"none"}}>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Users" style={{color:"black"}}/>
    </ListItem>
    </Link>
    <Link to="/items" style={{textDecoration:"none"}}>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Items" style={{color:"black"}}/>
    </ListItem>
    </Link>
    <Link to="/services" style={{textDecoration:"none"}}>
    <ListItem button>
      <ListItemIcon>
        <BuildIcon />
      </ListItemIcon>
      <ListItemText primary="Services" style={{color:"black"}}/>
    </ListItem>
    </Link>
    <Link to="/events" style={{textDecoration:"none"}}>
    <ListItem button>
      <ListItemIcon>
        <EventIcon />
      </ListItemIcon>
      <ListItemText primary="Events" style={{color:"black"}}/>
    </ListItem>
    </Link>
    <Link to="/offers" style={{textDecoration:"none"}}>
    <ListItem button>
      <ListItemIcon>
        <LocalOfferIcon />
      </ListItemIcon>
      <ListItemText primary="Offers" style={{color:"black"}}/>
    </ListItem>
    </Link>
    <Link to="/claims" style={{textDecoration:"none"}}>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Claims" style={{color:"black"}}/>
    </ListItem>
    </Link>
  </div>
);

