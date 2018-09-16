import React, { PropTypes } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Header from 'design-system/components/Header/Header.jsx';
import CustomDropdown from 'design-system/components/CustomDropdown/CustomDropdown.jsx';
import Button from 'design-system/components/CustomButtons/Button.jsx';
import navbarsStyle from 'design-system/assets/jss/material-kit-react/views/componentsSections/navbarsStyle.jsx';

class Navigation extends React.Component {
  static propTypes = {};

  render() {
    const { classes } = this.props;
    return (
      <Header
        brand="Slice of Heaven"
        href="home"
        color="transparent"
        fixed
        changeColorOnScroll={{
          height: 400,
          color: 'white'
        }}
        rightLinks={
          <List className={classes.list}>
            <ListItem className={classes.listItem}>
              <Button
                href="home"
                className={classes.navLink}
                // onClick={e => e.preventDefault()}
                color="transparent"
              >
                Home
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                href="link2"
                className={classes.navLink}
                // onClick={e => e.preventDefault()}
                color="transparent"
              >
                Cakes
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                href="link1"
                className={classes.navLink}
                // onClick={e => e.preventDefault()}
                color="transparent"
              >
                Photo Cakes
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <CustomDropdown
                buttonText="Dropdown"
                dropdownHeader="Dropdown Header"
                buttonProps={{
                  className: classes.navLink,
                  color: 'transparent'
                }}
                dropdownList={[
                  'Action',
                  'Another action',
                  'Something else here',
                  { divider: true },
                  'Separated link',
                  { divider: true },
                  'One more separated link'
                ]}
              />
            </ListItem>
          </List>
        }
      />
    );
  }
}

export default withStyles(navbarsStyle)(Navigation);
