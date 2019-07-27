import React, { Component } from 'react';
import { withStyles, Typography } from '@material-ui/core';
import styles from './styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import Fab from '@material-ui/core/Fab';
import PropTypes from 'prop-types';

class TaskItem extends Component {
  render() {
    var { classes, task, status } = this.props;
    return (
      <Card className={classes.card}>
        <CardContent>
          <Grid container justify="space-between">
            <Grid item md={8}>
              <Typography variant="h5" gutterBottom>
                {task.title}
              </Typography>
            </Grid>
            <Grid item md={4}>
              {status.label}
            </Grid>
          </Grid>
          <Typography component="p">{task.description}</Typography>
        </CardContent>

        <CardActions className={classes.cardActions}>
          <Fab
            color="primary"
            size="small"
            aria-label="Add"
            className={classes.fab}
          >
            <Icon fontSize="small">edit_icon</Icon>
          </Fab>
          <Fab
            color="secondary"
            size="small"
            aria-label="Edit"
            className={classes.fab}
          >
            <Icon fontSize="small">delete_icon</Icon>
          </Fab>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(TaskItem);
