import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';
import CustomDropdown from 'design-system/components/CustomDropdown/CustomDropdown.jsx';
import { container } from 'design-system/assets/jss/material-kit-react.jsx';
import CakeCard from 'components/cakeCard';

const styles = () => ({
  container: {
    zIndex: '12',
    color: '#FFFFFF',
    color: 'black',
    padding: 30,
    ...container
  },
  main: {
    background: '#FFFFFF',
    position: 'relative',
    zIndex: '3',
    height: '100%'
  },
  mainRaised: {
    margin: '0px 30px 30px 30px',
    borderRadius: '6px',
    boxShadow:
      '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)'
  },
  outerContainer: {
    paddingTop: 82,
    background: 'black',
    paddingBottom: 50
  },
  infoBlock: {
    padding: '5% 10%',
    color: 'white'
  },
  infoBlockContent: {
    padding: '30px 0px'
  },
  filtersContainer: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1
  },
  filterLeft: {
    display: 'flex',
    flex: 0.5,
    justifyContent: 'flex-start'
  },
  filterRight: {
    display: 'flex',
    flex: 0.5,
    justifyContent: 'flex-end'
  },
  cakesContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cakesOuter: {
    padding: 30
  }
});

class Cake extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.outerContainer}>
        <div className={classes.infoBlock}>
          <h2>Send Fresh Baked Cakes Online</h2>
          <h4 className={classes.infoBlockContent}>
            Brightening up your occasions with a melt-in-mouth and freshly baked
            cake is no more a dream because we present you a wide assortment of
            deliciously rich cakes that are infused with luscious flavors.
          </h4>
        </div>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classNames(classes.container)}>
            <div className={classes.filtersContainer}>
              <div className={classes.filterLeft}>
                <CustomDropdown
                  hoverColor="black"
                  buttonText="Select Flavour"
                  buttonProps={{
                    round: true,
                    color: 'info'
                  }}
                  dropdownList={[
                    'All',
                    { divider: true },
                    'Chololate',
                    'Fruit',
                    'Coffee',
                    'Vanilla',
                    'Butte Scotch',
                    'Exotics',
                    { divider: true },
                    'Surprise Me'
                  ]}
                />
              </div>
              <div className={classes.filterRight}>
                <CustomDropdown
                  hoverColor="black"
                  buttonText=" Sort By"
                  buttonProps={{
                    round: true,
                    color: 'info'
                  }}
                  dropdownList={[
                    'Popularity',
                    'Price High to Low',
                    'Price Low to High'
                  ]}
                />
              </div>
            </div>
          </div>
          <div className={classes.cakesContainer}>
            <div className={classes.cakesOuter}>
              <CakeCard />
            </div>
            <div className={classes.cakesOuter}>
              <CakeCard />
            </div>
            <div className={classes.cakesOuter}>
              <CakeCard />
            </div>
            <div className={classes.cakesOuter}>
              <CakeCard />
            </div>
            <div className={classes.cakesOuter}>
              <CakeCard />
            </div>
            <div className={classes.cakesOuter}>
              <CakeCard />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(Cake);
