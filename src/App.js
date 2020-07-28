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

function App() {
  return (
    <div className="App">
    <NavBar />
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
