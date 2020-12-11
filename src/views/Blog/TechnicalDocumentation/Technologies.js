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
    'Backend\n' +
    'Golang\n' +
    'Go est un langage de programmation open source qui facilite la création de logiciels simples, fiables et efficaces.' +
    'Il a été conçu pour le cloud et la scalabilité. De plus un grand nombre de librairie et d’outils cloud et devops existent ' +
    'pour ces langages. Ce qui en faisait un choix évident pour notre solution.\n' +
    'PostgreSQL\n' +
    'PostgreSQL est un puissant système de base de données relationnelle objet open source avec plus de 30 ans de développement ' +
    'actif qui lui a valu une solide réputation de fiabilité, de robustesse des fonctionnalités et de performances. L’utilisation ' +
    'de Postgres permet une structuration efficace de nos data afin de gérer au mieux nos utilisateurs et les containers utilisés par ces derniers.\n' +
    'MongoDB\n' +
    'MongoDB est une base de données distribuée, universelle et basée sur des documents, qui a été conçue pour les développeurs ' +
    'd\'applications modernes et pour l\'ère du Cloud. Nous l’utilisons essentiellement pour enregistrer nos offres qui n’ont pas ' +
    'de forme fixe et peuvent évoluer dans le temps.\n' +
    'Docker\n' +
    'Docker est un logiciel libre permettant de lancer des applications dans des conteneurs logiciels. Plus léger et performant qu’une' +
    'vm ainsi que plus facilement gérable cela nous permet d’offrir une bonne qualité de service sans compliquer la stack technique.\n' +
    'Dashboard\n' +
    'VueJS\n' +
    'Pour le développement de notre Dashboard, nous avons utilisé du VueJS avec le framework Quasar. Ce framework a la particularité de ' +
    'pouvoir rendre un visuel sur un navigateur web, mais aussi de générer une application android et ios tout en utilisant seulement un seul code source.\n';


export default function Technologies(props) {
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
                        <img src="https://i.imgur.com/RAXMGMx.png" className={classes.img}/>
                        <ReactMarkdown source={markdown}/>
                        <div>
                        </div>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
