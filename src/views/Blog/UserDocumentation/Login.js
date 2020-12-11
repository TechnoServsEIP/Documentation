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
                        <div className={classes.content}>
                        <br/>
                        <h2>Service d'Authentification au compte <b>TechnoServs</b></h2>
                        <h4>Si vous souhaitez vous connecter à votre compte TechnoServs, munissez-vous de votre adresse mail et de votre mot de passe que vous aviez utilisé lors de la création de votre compte chez TechnoServs.
                            Si vous n’en avez pas merci de vous référer à la section précédente <a href={"/documentation/register"}><b>création du compte</b></a>.
                        </h4>
                        <br/>
                        <img src={"https://i.imgur.com/h9v9scd.gif"} className={classes.gif}/>
                        <br/>
                        <h4>Vous n’avez alors plus qu’à entrer dans le premier champ votre adresse mail, et dans le deuxième votre mot de passe. Veuillez bien faire attention toutefois que ce soient les informations que vous avez entré précédemment lors de la création de votre compte.(Comme on peut le voir sur l'exmple plus haut)</h4>
                        <div>
                        </div>
                        </div>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
