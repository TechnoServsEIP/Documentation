/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import GettingStartedUser from "../../views/Blog/UserDocumentation/GettingStartedUser";
import TechnicalDocPage from "../../views/Blog/TechnicalDocumentation/GettingStartedTech";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
          <Link to={"/documentation/getting-started-user"} color="transparent"
                className={classes.navLink}>
              Documentation Utilisateur
          </Link>
    </ListItem>
        <ListItem className={classes.listItem}>
            <Link to={"/documentation/getting-started-technical"} color="transparent"
                  className={classes.navLink}>
                Documentation Technique
            </Link>
        </ListItem>
        <ListItem className={classes.listItem}>
            <Link to={"/faq"} color="transparent"
                  className={classes.navLink}>
                FAQ
            </Link>
        </ListItem>
    </List>
  );
}
