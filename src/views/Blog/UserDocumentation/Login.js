import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

import styles from "assets/jss/material-kit-react/views/RegisterUser.js";

// Sections for this page
import Sidebar from "components/Sidebar/User/Sidebar";
import ReactMarkdown from "react-markdown";

const useStyles = makeStyles(styles);

export default function Login(props) {
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
                    <GridItem>
                        <Sidebar/>
                    </GridItem>
                    <GridItem  style={{marginLeft: "220px"}}>
                        <h1>Documentation Utilisateur</h1>
                        <br/>
                        <h2>Service d'Authentification au compte <b>TechnoServs</b></h2>
                        <div>
                        </div>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
