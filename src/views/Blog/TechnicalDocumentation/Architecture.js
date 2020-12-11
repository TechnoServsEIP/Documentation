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
    '#### TechnoServs est hébergé sur un serveur **Azure** (Ubuntu).\n' +
    '#### Il host un serveur en **Go** connecté à une base de données **MongoDB** et **PostgreSQL**.\n' +
    '\n' +
    '#### **MongoDB** est utilisé pour stocker les offres des jeux proposés associés aux caractéristiques du serveur de jeu.\n' +
    '#### **PostgreSQL** stocke les données des utilisateurs ainsi que les informations des serveurs de jeux.\n' +
    '\n' +
    '#### L’API utilisé par le site web de **TechnoServs** permet de gérer les offres, serveurs de jeux et utilisateurs.\n';


export default function Architecture(props) {
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
                        <h2>Architecture</h2>
                        <br/>
                        <img src="https://i.imgur.com/E2HeGHs.png" className={classes.img2}/>
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
