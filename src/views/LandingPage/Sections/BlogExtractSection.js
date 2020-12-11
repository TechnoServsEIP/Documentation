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
import { Link } from "react-router-dom";

import GettingStartedUserCard from "../BlogExtract/GettinStartedUser.js"
import RegisterCard from '../BlogExtract/RegisterUser.js'
import GettingStartedTechCard from '../BlogExtract/GettingStartedTech.js'

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
                    <h2 className={classes.title}>Quelques documents qui pourraient vous intéresser.</h2>
                    <h5 className={classes.description}>
                        Cliquez juste sur <b>En savoir plus</b>.
                    </h5>
                    <br/>
                    <br/>
                </GridItem>
            </GridContainer>
        </div>
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={4} className={classes.item}>
                        <GettingStartedUserCard/>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4} className={classes.item}>
                        <RegisterCard/>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4} className={classes.item}>
                        <GettingStartedTechCard/>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4} className={classes.item}>

                    </GridItem>
                    <GridItem xs={12} sm={12} md={4} className={classes.item}>

                    </GridItem>
                    <GridItem xs={12} sm={12} md={4} className={classes.item}>

                    </GridItem>
                    <GridItem xs={12} sm={12} md={4} className={classes.itemBottom}>

                    </GridItem>
                    <GridItem xs={12} sm={12} md={4} className={classes.itemBottom}>

                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
