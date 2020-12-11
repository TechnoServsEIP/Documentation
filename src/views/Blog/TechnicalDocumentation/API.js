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
    '#### [URL de la documentation](https://documenter.getpostman.com/view/5496386/T1LPE7Ec) sur **Postman**.' +
    '\n' +
    '\n' +
    '\n' +
    '#### La documentation de l’API est généré par Postman, elle reprend tous les endpoints permettant de gérer les offres,' +
    'utilisateurs et serveurs de jeux.\n' +
    '\n' +
    '#### Afin d’obtenir un token vous devez:\n' +
    '#### Créer un compte via l’endpoint **createAccount**.\n' +
    '#### Confirmer ensuite votre compte avec l’endpoint confirmation en passant en paramètre le token reçu après la création' +
    ' du compte.\n' +
    '#### Enfin connectez-vous avec votre compte avec l’endpoint connection et récupérer le token permettant d’effectuer les' +
    ' autres requêtes à l’**API**.\n' +
    '\n' +
    '#### Certains endpoints ne sont disponibles qu’aux admins. Seul un admin peut promouvoir un nouvel admin. Le premier ' +
    'admin est initialisé manuellement depuis la base de données **PostgreSQL**.\n';


export default function GettingStarted(props) {
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
                        <h2>API et Interfaces</h2>
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
