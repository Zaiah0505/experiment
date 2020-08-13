import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import SideDrawer from "./components/SideDrawer";
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { useSelector } from "react-redux";
import Request from './components/Request';
import firebase from './firebase';
import {useDispatch} from 'react-redux';
import { setUser } from './actions';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

function ResponsiveDrawer() {
  const classes = useStyles();
  const isLoggedIn = useSelector(store => store.auth.logged);

  const dispatch = useDispatch();
  firebase.auth().signInWithEmailAndPassword("zaiah0505@hotmail.com", "class6b0505")
  .then(user => {
    if (user) {
      dispatch(setUser(user));
    }
  })

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <NavBar />
        {isLoggedIn && <SideDrawer />}
        <main className={classes.content}>
          <div className={classes.toolbar} />

          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/login">About</Link>
                </li>
                <li>
                  <Link to="/register">Users</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/login">
                <SignIn />
              </Route>
              <Route path="/register">
                <SignUp />
              </Route>
              <Route path="/request">
                <Request />
              </Route>
              <Route path="/">
                {!isLoggedIn ? <Redirect to="/login" /> :
                <Typography paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
                  dolor purus non enim praesent elementum facilisis leo vel. Risus at
                  ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
                  quisque non tellus. Convallis convallis tellus id interdum velit
                  laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
                  adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
                  integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
                  eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
                  quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
                  vivamus at augue. At augue eget arcu dictum varius duis at consectetur
                  lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
                  faucibus et molestie ac.
                </Typography>
                }
              </Route>
            </Switch>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default ResponsiveDrawer;

