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
    '#### Cette section à pour but d’établir un guide du développeur qui permettrait à toute personne rejoignant' +
    'l\'équipe de contribuer au projet en comprenant son état, sa structure, et la façon de contribuer, sans ' +
    'avoir à nous solliciter pour obtenir les informations nécessaires.\n' +

    '#### **TechnoServs** est une solution de hosting de serveurs de jeux vidéos dans le cloud, avec des offres à la demande ' +
    'pour chacun, en simplifiant chaques étapes du processus.\n' +

    '#### Notre architecture est basé sur un backend en language **Go** et un frontend en **VueJS** avec le framework **Quasar**.\n' +

    '#### Nous utilisons **GitHub** comme outils de versioning et organisons nos tâches via **Trello**. Pour communiquer, nous utilisons **Slack** et **Hangout**. ' +

    'Notre serveur utilise **l’API docker** afin de gérer les containers, qui eux héberge un serveur de jeu. Nous avons mis à disposition une API' +
    'afin de permettre à l’application web de gérer les serveurs de jeux.\n' +

    '#### La documentation de l’API est généré par Postman, elle reprend tous les endpoints permettant de gérer les offres, les utilisateurs et les' +
    'serveurs de jeux.\n' +

    '#### Le linter officiel de golang est utilisé pour le backend. Le front utilise **Eslint**.\n' +

    '#### Le backend utilise la librairie standard de test de **golang** et les github action afin d\'automatiser les tests unitaires.' +
    ' Côté frontend le framework **Jest** a été intégré.\n'+

    '#### Le déploiement de la solution est automatisé via **github** action.\n' +

    '#### Le dashboard est déployé sur **Netlify**. Le site se trouve sur le lien suivant: [app.technoservs.co](https://app.technoservs.co/#/).\n';


export default function GettingStartedTech(props) {
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
                        <br/>
                        <h3>Présentation</h3>
                        <br/>
                        <img src="https://i.imgur.com/RAXMGMx.png" className={classes.img}/>
                        <br/>
                        <ReactMarkdown source={markdown}/>
                        <div>
                        </div>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
