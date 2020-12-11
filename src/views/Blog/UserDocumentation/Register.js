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

export default function Register(props) {
    const classes = useStyles();
    const markdownIntro = '#### Dans cette section nous allons voir comment créer un compte TechnoServs.\n' +
    '##### Tout d\'abord vous devez vous rendre sur [TechnoServs](https://app.technoservs.co/#/)\n' +
    '##### Suite à quoi vous devrez avoir une page similaire (voir ci-dessous).';
    const markdownContent = '#### Comme nous le constatons dans l\'exemple ci-dessus, il nous suffit de rentrer notre adresse email' +
        ' dans les deux premiers champs. \n' +
        '##### Ainsi que votre mot de passe dans les deux derniers champs. ' +
        'et surtout n\'oubliez pas d\'accepter nos conditions d\'utilisations.\n'+
        '###### **Attention vos adresses mails et mots de passe doivent être identiques.**\n ' +
        '**Vous devez également avoir un majuscule et minuscule, un charactère spécial, un chiffre et un minimum de 8 charactères.**\n';
    const markdownExplication = '#### Vous pouvez alors cliquer sur le boutton vert "Confirmation", suite à quoi vous serez redirigé vers la page d\'Identification de TechnoServs.';
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
                        <h2>Création du compte <b>TechnoServs</b></h2>
                        <div>
                            <ReactMarkdown source={markdownIntro}/>
                            <img className={classes.gif} src={'https://i.imgur.com/yBEmn2c.gif'}/>
                            <ReactMarkdown source={markdownContent}/>
                            <br/>
                            <img className={classes.img} src={'https://i.imgur.com/VJ8xMJb.png'}/>
                            <ReactMarkdown source={markdownExplication}/>
                        </div>
                        </div>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
