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

export default function ConnectToServer(props) {
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
                        <h2>Se connecter à son serveur de jeux personnel</h2>
                        <h4>
                            Pour se connecter à son serveur de jeu vous devez avoir un serveur disponnible sur <b>TechnoServs</b>, si ce n'est pas le cas vous pouvez vous réferez au <a href={"/document/create-server"}>document antérieur</a>.
                        </h4>
                        <br/>
                        <img src={"https://i.imgur.com/bQgZtA4.gif"} className={classes.gif3}/>
                        <br/>
                        <h4>
                            Veuillez bien avoir <b>Minecraft</b> ouvert en même temps.<br/>
                            Allez dans la partie <b>Multijoueur</b> et <b>Ajouter un serveur</b><br/>
                            Une fois ici copiez l'<b>ip du serveur</b> suivi de <b>:</b> et de votre <b>Port</b> (Comme nous montre l'exemple si dessus).
                        </h4>
                        <div>
                        </div>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
