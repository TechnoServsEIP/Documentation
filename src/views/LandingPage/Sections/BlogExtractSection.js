import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { title } from "assets/jss/material-kit-react.js";

// @material-ui/icons
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import GettingStarted from "./../BlogExtract/GettinStarted.js"

const useStyles = makeStyles((theme) => ({
    btn: {
    },
    section: {
        padding: "70px 0",
        textAlign: "center"
    },
    title: {
        ...title,
        marginBottom: "1rem",
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none"
    },
    description: {
        color: "#999"
    },
    item: {
        marginBottom: "3%",
        textAlign: "left"
    },
    itemBottom: {
        textAlign: "left"
    }
}));


export default function BlogExtractSection() {
    const classes = useStyles();
    return (
        <div>
        <div className={classes.section}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                    <h2 className={classes.title}>Some information that might help you</h2>
                    <h5 className={classes.description}>
                        You can just click on either button "Technical Documentation" or "User Documentation" to filter you choice or to "All Documentation" to see all of it.
                    </h5>
                </GridItem>
            </GridContainer>
            <ButtonGroup color="primary" aria-label="outlined primary button group" fullWidth={true} size="large" className={classes.btn}>
                <Button>User Documentation</Button>
                <Button>All</Button>
                <Button>Technical Documentation</Button>
            </ButtonGroup>
        </div>
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={4} className={classes.item}>
                        <GettingStarted/>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4} className={classes.item}>
                        <GettingStarted/>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4} className={classes.item}>
                        <GettingStarted/>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4} className={classes.item}>
                        <GettingStarted/>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4} className={classes.item}>
                        <GettingStarted/>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4} className={classes.item}>
                        <GettingStarted/>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4} className={classes.itemBottom}>
                        <GettingStarted/>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4} className={classes.itemBottom}>
                        <GettingStarted/>
                    </GridItem>
                </GridContainer>
            </div>
            <div className={classes.section}>
                <Button variant="contained" color="primary">
                    Show More
                </Button>
            </div>
        </div>
    );
}
