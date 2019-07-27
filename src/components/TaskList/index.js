import React, { Component } from 'react';

import { withStyles, Box } from '@material-ui/core';
import styles from './styles';

import Grid from '@material-ui/core/Grid';
import TaskItem from '../TaskItem';

class TaskList extends Component {
  render() {
    var { classes, tasks, status } = this.props;
    return (
      <Grid item md={4} xs={12}>
        <Box mt={2} mb={2}>
          <div className={classes.status}>{status.label}</div>
        </Box>

        <div className={classes.wrapperListTask}>
          {tasks.map(task => {
            return <TaskItem key={task.id} task={task} status={status} />;
          })}
        </div>
      </Grid>
    );
  }
}

export default withStyles(styles)(TaskList);
