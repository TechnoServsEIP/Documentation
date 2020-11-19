import React from "react";
// nodejs library that concatenates classes
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Divider from '@material-ui/core/Divider';

import Answer1 from "./FAQQuestions/Answer1.js"
import Answer2 from "./FAQQuestions/Answer2.js"
import Answer3 from "./FAQQuestions/Answer3.js"
import Answer4 from "./FAQQuestions/Answer4.js"
import Answer5 from "./FAQQuestions/Answer5.js"
import Answer6 from "./FAQQuestions/Answer6.js"
import Answer7 from "./FAQQuestions/Answer7.js"


import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page


const useStyles = makeStyles(styles);

export default function LandingPage(props) {
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
                    <GridItem xs={12} sm={12} md={3}>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={7}>
                        <h1>FAQ</h1>
                        <h3> Je n’arrive pas à avoir accès à mon compte.</h3>
                        <Answer1/>
                        <Divider variant="middle" />

                        <h3>Je n’ai pas reçu le mail de confirmation.</h3>
                        <Answer2/>
                        <Divider variant="middle" />

                        <h3>J’ai oublié mon mot de passe.</h3>
                        <Answer3/>
                        <Divider variant="middle" />

                        <h3>Où puis-je signaler un bug ?</h3>
                        <Answer4/>
                        <Divider variant="middle" />

                        <h3>Certains onglets ne fonctionnent pas dans le dashboard.</h3>
                        <Answer5/>
                        <Divider variant="middle" />

                        <h3>Lorsque je suis sur téléphone, le site ne fonctionne pas.</h3>
                        <Answer6/>
                        <Divider variant="middle" />

                        <h3>es ressources utilisées du serveur ne semblent pas être correctes.</h3>
                        <Answer7/>
                        <Divider variant="middle" />
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
