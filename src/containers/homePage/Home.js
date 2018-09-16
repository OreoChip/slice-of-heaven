import React, { Component } from 'react';
// nodejs library that concatenates classes
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';
import CakeCard from 'components/cakeCard';
import FlavoursCard from 'components/flavourCard';
import Footer from 'design-system/components/Footer/Footer.jsx';
import ContactSection from 'components/contactSection';

// @material-ui/icons

// core components
import GridContainer from 'design-system/components/Grid/GridContainer.jsx';
import GridItem from 'design-system/components/Grid/GridItem.jsx';
import Parallax from 'design-system/components/Parallax/Parallax.jsx';
import { container } from 'design-system/assets/jss/material-kit-react.jsx';
import Slider from 'react-slick';

const styles = () => ({
  outer: {
    padding: 20
  },
  textSize: {
    fontSize: 12
  },
  container: {
    zIndex: '12',
    color: '#FFFFFF',
    ...container
  },
  main: {
    background: '#FFFFFF',
    position: 'relative',
    zIndex: '3'
  },
  mainRaised: {
    margin: '-60px 30px 0px',
    borderRadius: '6px',
    boxShadow:
      '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)'
  },
  fontColor: {
    color: 'black',
    paddingTop: 30,
    textAlign: 'center'
  },
  slick: {
    padding: 30
  },
  flavour: {
    padding: 30,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  flavourComponent: {
    padding: 30
  },
  contactOuter: {
    padding: 40
  }
});

class Home extends Component {
  render() {
    const { classes } = this.props;
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      responsive: [
        {
          breakpoint: 995,
          settings: {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true
          }
        }
      ]
    };
    return (
      <div>
        <Parallax filter image={require('assets/homePageCake.jpg')}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Your Story Starts With Us.</h1>
                <h4>
                  Every landing page needs a small description after the big
                  bold title, that's why we added this text here.
                </h4>
                <br />
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classNames(classes.container)}>
            <h2 className={classes.fontColor}> Best Sellers</h2>
            <div className={classes.slick}>
              <Slider {...settings}>
                <div className={classes.outer}>
                  <CakeCard />
                </div>
                <div className={classes.outer}>
                  <CakeCard />
                </div>
                <div className={classes.outer}>
                  <CakeCard />
                </div>
                <div className={classes.outer}>
                  <CakeCard />
                </div>
                <div className={classes.outer}>
                  <CakeCard />
                </div>
              </Slider>
            </div>
            <h2 className={classes.fontColor}> Cakes by Flavour</h2>
            <div className={classes.flavour}>
              <div className={classes.flavourComponent}>
                <FlavoursCard />
              </div>
              <div className={classes.flavourComponent}>
                <FlavoursCard />
              </div>
              <div className={classes.flavourComponent}>
                <FlavoursCard />
              </div>
              <div className={classes.flavourComponent}>
                <FlavoursCard />
              </div>
              <div className={classes.flavourComponent}>
                <FlavoursCard />
              </div>
              <div className={classes.flavourComponent}>
                <FlavoursCard />
              </div>
              <div className={classes.flavourComponent}>
                <FlavoursCard />
              </div>
              <div className={classes.flavourComponent}>
                <FlavoursCard />
              </div>
            </div>
            <h2 className={classes.fontColor}>
              {' '}
              SEEKING FOR SOMETHING SPECIAL AND CUSTOMIZED ?
            </h2>
            <div className={classes.contactOuter}>
              <ContactSection />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(styles)(Home);
