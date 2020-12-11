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
    '## Tests \n' +
    '### **Backend**\n' +
    '#### Pour le serveur nous utilisons la librairie standard de test de golang et les github action. Lors d’un pull request ' +
    'les tests sont automatiquement réalisés grâce au fichier **ci.yml**.\n' +
    '#### Les tests sont rédigés de manière idiomatique.\n' +
    '### **Dashboard**\n' +
    '#### Pour l’application web, nous avons intégré Jest. Jest permet de faire des tests sur différent technologie ' +
    '**JavaScript** qui met l\'accent sur la simplicité.\n' +
    '\n' +
    '#### Pour plus d’informations sur Jest: [jestks](https://jestjs.io/)\n';


export default function Test(props) {
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
                        <ReactMarkdown source={markdown}/>
                        <div>
                        </div>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
