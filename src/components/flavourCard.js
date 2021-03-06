import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';

const styles = () => ({
  card: {
    maxWidth: 250
  },
  media: {
    width: 150,
    height: 150,
    borderRadius: '50%'
  },
  outer: {
    padding: 20
  },
  text: {
    padding: 10,
    color: 'black',
    textAlign: 'center'
  },
  button: {
    padding: '0!important'
  }
});

class FlavoursCard extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.media}>
        <Button className={classes.button}>
          <img
            className={classes.media}
            src={require('assets/cakeCardSample.jpg')}
          />
        </Button>
        <Typography
          className={classes.text}
          gutterBottom
          variant="headline"
          component="h2"
        >
          Chocolate
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(FlavoursCard);
