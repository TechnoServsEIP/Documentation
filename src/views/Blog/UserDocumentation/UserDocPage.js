import React from "react";
// nodejs library that concatenates classes
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Divider from '@material-ui/core/Divider'

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import BreadcrumbsUser from "./BreadCrumbsUser.js"
import GettingStarted from "./Documentation/GettingStarted.js"

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
    const classes = useStyles();
    const { ...rest } = props;
    return (
        <div className={classes.main}>
            <Header
                color="white"
                brand="TechnoServs"
                fixed
                rightLinks={<HeaderLinks />}
                changeColorOnScroll={{
                    height: 200,
                    color: "white"
                }}
                {...rest}
            />
                <div>
                    <GridContainer>
                        <GridItem>
                            <br /><br /><br /><br />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                            <BreadcrumbsUser/>
                        </GridItem>
                        <Divider orientation="vertical" flexItem />
                        <GridItem xs={12} sm={12} md={9}>
                            <h1>User Documentation</h1>
                            <GettingStarted/>
                        </GridItem>
                    </GridContainer>
                </div>
        </div>
    );
}
