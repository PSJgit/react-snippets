import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// snippets 
import Async from './components/Async/Async';
import GeoLocation from './components/GeoLocation/GeoLocation';
import Counter from './components/Counter/Counter';

const routes = ['Home', 'Async', 'GeoLocation', 'Counter']

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
  menu: {
    width: 250,
  },
}));

export default function App() {
  
  const classes = useStyles();

  const [ menuState, setMenuState ] = React.useState(false);

  const toggleDrawer = open => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setMenuState(open);
  };

  const menu = () => (
    <div
      className={classes.menu}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {routes.map((text) => (
          <Link to={`/${text.toLowerCase()}`} key={text.toLowerCase()}>
            <ListItem button key={text}>
              <ListItemText primary={text}/>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <>
     <Router>
      <div className={classes.root}>
        <AppBar position="static" color='primary'>
          <Toolbar>
            <IconButton onClick={toggleDrawer(true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Snippets
            </Typography>
          
          </Toolbar>
        </AppBar>
      </div>

      <Drawer open={menuState} onClose={toggleDrawer(false)}>
        {menu()}
      </Drawer>

      <Switch>
        <Route path="/async">
          <Async />
        </Route>
        <Route path="/geolocation">
          <GeoLocation />
        </Route>
        <Route path="/counter">
          <Counter count={5}/>
        </Route>
        <Route path="/">
          <div>home</div>
        </Route>
      </Switch>

    </Router>

    </>
  )
}

