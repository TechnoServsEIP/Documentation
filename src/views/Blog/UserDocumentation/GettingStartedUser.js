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
const markdown =
        '## Prendre en main TechnoServs\n' +
        '\n' +
        '#### TechnoServers est une solution d\'hébergement en ligne de serveur de jeux, vous permetant facilement de jouer à vos jeux favoris.' +
        ' Le tout sans vous souciez d\'aucune installation.\n' +
        '#### Pour découvrir notre solution vous pouvez vous rendre dès à présent sur' +
        '[TechnoServs](https://app.technoservs.co/#/) .\n' +
        '##### Si néanmoins tu as besoin d\'aide n\'hésite pas à voir nos différentes sections.';


export default function GettingStartedUser(props) {
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
                            <img className={classes.gif2} src={'https://media.giphy.com/media/FQyQEYd0KlYQ/giphy.gif'}/>
                            <ReactMarkdown source={markdown}/>
                            <div>
                            </div>
                        </GridItem>
                    </GridContainer>
                </div>
        </div>
    );
}
