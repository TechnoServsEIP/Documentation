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
    '## Norme du code\n' +
    '### **Backend**\n' +
    '#### Pour la norme nous utilisons le linter officiel de golang https://github.com/golang/lint\n' +
    '### **Dashboard**\n' +
    '#### Pour le dashboard, nous codons à la norme Eslint pour VueJS avec le package eslint-plugin-vue. Ce package nous ' +
    'permet de repérer les erreurs de syntaxe, les mauvaises utilisations des directives VueJS et les violations de ' +
    'Style (**trop de caractère sur une ligne par exemple**).\n' +
    '\n' +
    '#### Pour plus d’informations sur les règles, voici le lien vers la documentation: [eslint.vuejs](https://eslint.vuejs.org)\n' +
    '\n';


export default function Norms(props) {
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
