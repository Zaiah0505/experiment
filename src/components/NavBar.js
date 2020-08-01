import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { useSelector } from 'react-redux';
import firebase from '../firebase';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

function NavBar() {
    const classes = useStyles();
    const logged = useSelector(store => store.auth.logged)
    const signOut = () => {
        firebase.auth().signOut();
    }
    return(
        <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="body1" color="inherit" className={classes.title}>
                React & Material-UI Sample Application testing
                </Typography>
                {logged && 
                <Button color="inherit" onClick={signOut}>Logout</Button>}
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default NavBar;