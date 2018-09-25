import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
// material-ui components
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
// @material-ui/icons
import People from '@material-ui/icons/People';
import Email from '@material-ui/icons/Email';
import ContactPhone from '@material-ui/icons/ContactPhone';
import Message from '@material-ui/icons/Message';
import Send from '@material-ui/icons/Send';
// core components
import GridContainer from 'design-system/components/Grid/GridContainer.jsx';
import GridItem from 'design-system/components/Grid/GridItem.jsx';
import CustomInput from 'design-system/components/CustomInput/CustomInput.jsx';
import { Button } from '@material-ui/core';

const styles = () => ({
  media: {
    marginTop: '5%',
    width: '80%',
    height: '75%',
    margin: '5%',
    boxShadow:
      '0px 3px 6px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)'
  },
  button: {
    background: 'white'
  },
  text: {
    padding: 10
  },
  buttonContainer: {
    justifyContent: 'center',
    display: 'flex'
  }
});

class ContactSection extends Component {
  render() {
    const { classes } = this.props;
    return (
      <GridContainer>
        <GridContainer md={6}>
          <img className={classes.media} src={require('assets/mailCake.jpg')} />
        </GridContainer>
        <GridContainer md={6}>
          <GridItem xs={12} sm={12} md={12}>
            <CustomInput
              labelText="Name"
              id="name"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <People />
                  </InputAdornment>
                )
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <CustomInput
              labelText="Email"
              id="email"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Email />
                  </InputAdornment>
                )
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <CustomInput
              labelText="Contact Number"
              id="contactNumber"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <ContactPhone />
                  </InputAdornment>
                )
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <CustomInput
              labelText="Message"
              // id="contactNumber"
              formControlProps={{
                fullWidth: true,
                multiline: true
              }}
              inputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Message />
                  </InputAdornment>
                ),
                underline: 'black'
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={12} className={classes.buttonContainer}>
            <Button
              variant="extendedFab"
              aria-label="Delete"
              className={classes.button}
            >
              <Typography className={classes.text}>Send</Typography>
              <Send />
            </Button>
          </GridItem>
        </GridContainer>
      </GridContainer>
    );
  }
}

export default withStyles(styles)(ContactSection);
