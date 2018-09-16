import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import withStyles from '@material-ui/core/styles/withStyles';

const styles = () => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '75.25%'
  },
  textSize: {
    fontSize: 12
  }
});

class CakeCard extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={require('assets/cakeCardSample.jpg')}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Ebony and Ivory
          </Typography>
          <Typography className={classes.textSize} component="h2">
            You are on the way to enter into the world of sweet Indulgence with
            this delightful Chocolate-Vanilla treat
          </Typography>
        </CardContent>
        <CardActions>
          <Button className={classes.textSize} size="small" color="primary">
            Buy
          </Button>
          <Button className={classes.textSize} size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(CakeCard);
