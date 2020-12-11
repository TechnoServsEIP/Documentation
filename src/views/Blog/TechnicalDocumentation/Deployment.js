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
    '#### Le backend de Technoservs est déployé via Github Actions sur un serveur Azure.\n' +
    '\n' +
    '#### Le repository est configuré pour déclencher des tests unitaires après un pull request, une fois les tests validés ' +
    'sur la branche principale, une action effectue le transfert des fichiers vers le serveur Azure.\n' +
    '\n' +
    '#### Un outil (**incron**) exécutant des actions selon des événements du système de fichiers est configuré sur le serveur ' +
    'Azure afin de redémarrer automatiquement le serveur (**Go**) si nécessaire.\n';

const markdown2 =
    '#### Le fichier de configuration du déploiement continue cd.yml se trouve dans le dossier .github/workflows.\n' +
    '#### Il déploie les fichiers via ssh sur le serveur Azure avec quatre secrets configurés dans Github (host, port, ' +
    'privateKey et username) :\n' +
    '##### *host: ${{ secrets.HOST }}\t\t// L’adresse du serveur Azure\n' +
    '##### *username: ${{ secrets.USERNAME }}\t// le nom de l’utilisateur\n' +
    '##### *key: ${{ secrets.PRIVATEKEY }}\t\t// la clé privée\n' +
    '##### *port: ${{ secrets.PORT }}\t\t\t// le port ssh\n' +
    '#### Une fois les fichiers transférés sur le serveur, incron vérifie si des fichiers ont été modifié et redémarre le ' +
    'serveur Go.\n' +
    '#### La commande incrontab -e permet de spécifier le dossier à surveiller, le déclencheur et la commande ou le script ' +
    'à exécuter:\n' +
    '###### *<\/path/folder> TRIGGER <CMD or /path/script>*\n' +
    '\n' +
    '#### Example:\n' +
    '##### /home/technoservs_user/Backend/ IN_MODIFY /home/technoservs_user/startBackend.sh\n' +
    '\n' +
    '#### Voir la documentation pour plus de détails: [doc.incron](https://doc.ubuntu-fr.org/incron)\n';

export default function Deployment(props) {
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
                        <h2>Déploiement de la solution</h2>
                        <h3><b>Backend</b></h3>
                        <div>
                            <img src="https://i.imgur.com/IiXw15X.png" className={classes.imgboth}/>
                            <img src="https://i.imgur.com/Vyx7tlb.png" className={classes.imgboth}/>
                        </div>
                        <ReactMarkdown source={markdown}/>
                        <img src={"https://i.imgur.com/jEtwuiH.png"} className={classes.img2}/>
                        <ReactMarkdown source={markdown2}/>
                        <div>
                        </div>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
