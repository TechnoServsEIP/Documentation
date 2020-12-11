import React from "react";
import ReactMarkdown from 'react-markdown'
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

import styles from "assets/jss/material-kit-react/views/userDocPage.js";

// Sections for this page

import Sidebar from "components/Sidebar/User/Sidebar";
const useStyles = makeStyles(styles);

export default function CreateServer(props) {
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
                        <div className={classes.content}>
                        <h2>Créer son serveur de jeux personnel</h2>
                        <h4>
                            Pour créer un serveur de jeu vous devez avoir un compte <b>TechnoServs</b> et être connecté, si ce n'est pas le cas vous pouvez vous réferez aux documents antérieurs.<br/>
                        Une fois connecté vous devrait voir un bouton <b>Create here</b>, il vous suffira de clicker dessus.
                        </h4>
                        <br/>
                        <img src={"https://i.imgur.com/YL9JTFD.gif"} className={classes.gif3}/>
                        <br/>
                        <h4>
                            Comme on le voit si dessus, nous devons entrer un nom pour notre serveur ainsi qu'un plan de financemment<br/>
                            Suite à quoi il faudra procéder au payment (grâce à <b>stripe</b>). Et notre serveur devrait être prêt.
                        </h4>
                        <div>
                        </div>
                        </div>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
