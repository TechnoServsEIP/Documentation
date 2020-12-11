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

import Sidebar from "components/Sidebar/Technical/Sidebar";
const useStyles = makeStyles(styles);
const markdown =
    '#### L’API est basé sur une architecture **Model**, **Vue**, **Controller (MVC)**.\n' +
    '#### Elle est composée de **quatre principaux modules** : \n' +
    '##### *App\n' +
    '##### *Utilisateurs (lié au modèle Account)\n' +
    '##### *Offres (lié au modèle Offers)\n' +
    '##### *Serveur de jeu (lié au modèle DockerStore)\n' +
    '\n' +
    '#### Le module App contient toutes les fonctionnalités non basées sur un modèle ou un controller tel que les fonction d’initialisation de bases de donnée, la gestion des CORS.\n' +
    '\n' +
    '#### Le module Offres est étroitement lié au serveur de jeu puisque les caractéristiques de celui-ci dépend de l’offre associée.\n';


export default function ComponentAndSolution(props) {
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
                        <h1>Documentation Technique</h1>
                        <div className={classes.content}>
                        <br/>
                        <h2>Composants et modeules de la solution</h2>
                        <br/>
                        <h3> Diagrameme de classes Backend</h3>
                        <br/>
                        <img src="https://i.imgur.com/5NeNZtJ.png" className={classes.img3}/>
                        <ReactMarkdown source={markdown}/>
                        <div>
                        </div>
                        </div>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
