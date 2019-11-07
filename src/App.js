import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Drawer from '@material-ui/core/Drawer';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

// snippets 
import Async from './components/Async/Async';
import GeoLocation from './components/GeoLocation/GeoLocation';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));

export default function App() {
  
  const classes = useStyles();

  const [menuState, setMenuState] = React.useState(false);

  const toggleDrawer = open => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setMenuState(open);
  };

  const fullList = () => (
    <div
      className={classes.fullList}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <Router>
          {['Home', 'Async', 'GeoLocation'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              
                {console.warn(`/${text.toLowerCase()}`)}
                <Link to={`/${text.toLowerCase()}`}></Link>
              
              
            </ListItem>
          ))}
        </Router>
      </List>
      <Divider />
      
    </div>
  );

  return (
    <>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon onClick={toggleDrawer(true)}/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            snippets
          </Typography>
         
        </Toolbar>
      </AppBar>
    </div>

    <Drawer open={menuState} onClose={toggleDrawer(false)}>
      {fullList()}
    </Drawer>

    <Router>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to="/async">Async</Link>
          </li>
          <li>
            <Link to="/location">Location</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/async">
          <Async />
        </Route>
        <Route path="/location">
          <GeoLocation />
        </Route>
        <Route path="/">
          <div>home</div>
        </Route>
      </Switch>

    </Router>

    </>
  )
}

