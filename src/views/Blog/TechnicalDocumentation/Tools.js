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

export default function Tools(props) {
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
                        <h2>Outils d'organisation et de communication</h2>
                        <br/>
                        <h3><b>Github</b></h3>
                        <h4>Les outils d’organisation de TechnoServs sont la feature Issue de <b>GitHub</b>. Lorsque nous souhaitons implémenter une nouvelle feature, nous créons une Issue comme ci-dessous.
                        </h4>
                        <br/>
                        <img src="https://i.imgur.com/9AJDDMF.png" className={classes.img4}/>
                        <br/>
                        <h4>Dans cet exemple, nous mettons une description qui résume la tâche en une phrase, ainsi que la charge estimée, ainsi que la “<b>Definition of Done</b>” qui correspond à ceux que doit fonctionner une fois que la tâche est terminée.
                        </h4>
                        <br/>
                        <img src={"https://i.imgur.com/ZKUArm0.png"} className={classes.img3}/>
                        <br/>
                        <h4>Une fois l’issue créée, elle se retrouve dans la colonne “<b>To Do</b>” dans notre tableau des issues. Ceci nous permet de voir à quel stade d’avancement nous nous trouvons pour le Sprint.
                        </h4>
                        <h3><b>Trello</b></h3>
                        <h4>Pendant chaque inter-sprint, nous mettons chaques features et idées dans un tableau sur <b>Trello</b>.</h4>
                        <br/>
                        <img src={"https://i.imgur.com/4cREnyu.png"} className={classes.img3}/>
                        <br/>
                        <h3><b>Slack</b></h3>
                        <h4>Pour avoir une bonne communication et un bon suivi de chaque développeur, nous utilisons <b>Slack</b> avec un intégration <b>GitHub</b>, ce qui nous permet ainsi de voir les commits de chacun pour chaque projet.
                        </h4>
                        <img src={"https://i.imgur.com/dnO0LMJ.png"} className={classes.img5}/>
                        <br/>
                        <h4>Pour prendre des décisions, nous devons faire des appels, qui peuvent être long. Pour cela nous utilisons <b>Google Hangout</b> directement relié à Slack, ce qui nous permet de faire des partages d’écrans, et de partager nos opinions.</h4>
                        <br/>
                        <img src={"https://i.imgur.com/GEwCd7e.png"} className={classes.img6}/>
                        <br/>
                        <h3><b>Google Drive</b></h3>
                        <h4>Pour le stockage de nos documents, nous utilisons <b>Google Drive</b>, qui nous fournit une interface graphique simple à utiliser.
                        </h4>
                        </div>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
