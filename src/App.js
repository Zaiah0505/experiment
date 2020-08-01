import React from 'react';
import NavBar from './components/NavBar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import firebase from "./firebase";
import { useSelector, useDispatch } from 'react-redux';
import { setUser, logout } from './actions/index';
import Drawer from '@material-ui/core/Drawer';
import Menu from './components/Drawer'

function App() {
  const open = useSelector(store => store.drawer);
  const dispatch = useDispatch();
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      dispatch(setUser(user));
    } else {
      // No user is signed in.
      dispatch(logout());
    }
  });

  return (
    <div className="App">
    <NavBar />
    <Drawer anchor='left' open={open} variant='permanent'>
      asodfijads
    </Drawer>
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
          <li>
            <Link to="/register">register</Link>
          </li>
        </ul>
      </nav>
      <h1>Hello World</h1>
      <Switch>
        <Route path="/login">
          <SignIn />
        </Route>
        <Route path="/register">
          <SignUp />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
