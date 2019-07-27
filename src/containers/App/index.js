import { ThemeProvider, withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import thems from '../../commons/Theme';
import Taskboard from '../TaskBoard/index';
import styles from './styles';

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <Button variant="contained" color="primary">
      //     Hello World
      //   </Button>
      //   <div className={classes.box}>
      //     <div className={classes.shape}>ReactJS</div>
      //     <div className={classes.shape}>AngularJS</div>
      //   </div>
      // </div>
      <ThemeProvider theme={thems}>
        <Taskboard />
      </ThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
