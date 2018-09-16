import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
// material-ui components
import InputAdornment from '@material-ui/core/InputAdornment';
// @material-ui/icons
import People from '@material-ui/icons/People';
import Email from '@material-ui/icons/Email';
import ContactPhone from '@material-ui/icons/ContactPhone';
import Message from '@material-ui/icons/Message';
// core components
import GridContainer from 'design-system/components/Grid/GridContainer.jsx';
import GridItem from 'design-system/components/Grid/GridItem.jsx';
import CustomInput from 'design-system/components/CustomInput/CustomInput.jsx';

const styles = () => ({
  media: {
    marginTop: '5%',
    width: '80%',
    height: '75%',
    margin: '5%',
    paddingLeft: '10%'
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
              id="contactNumber"
              formControlProps={{
                fullWidth: true,
                multiline: true
              }}
              inputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Message />
                  </InputAdornment>
                )
              }}
            />
          </GridItem>
        </GridContainer>
      </GridContainer>
    );
  }
}

export default withStyles(styles)(ContactSection);
