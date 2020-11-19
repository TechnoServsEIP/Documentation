import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from '@material-ui/core/Button';
import Parallax from "components/Parallax/Parallax.js";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import WorkSection from "./Sections/WorkSection.js";
import BlogExtractSection from "./Sections/BlogExtractSection.js";

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
        <Header
            color="transparent"
            brand="TechnoServs"
            fixed
            rightLinks={<HeaderLinks />}
            changeColorOnScroll={{
                height: 200,
                color: "white"
            }}
            {...rest}
        />
      <Parallax filter image={require("assets/img/landing-bg.jpg")}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem>
              <h1 className={classes.title}>TechnoServs Documentation.</h1>
            </GridItem>
            <GridItem>
                <Button
                variant="contained" color="primary" size={"large"} className={classes.btnLeft}
            >
                Create a server
            </Button>
                <Button
                    variant="contained" color="primary" size={"large"} className={classes.btnRight}
                >
                    Join our Discord server
                </Button>
            </GridItem>
            </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
            <BlogExtractSection/>
          <WorkSection />
        </div>
      </div>
    </div>
  );
}
