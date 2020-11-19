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
import UserDocPage from "../../views/Blog/UserDocumentation/UserDocPage";
import TechnicalDocPage from "../../views/Blog/TechnicalDocumentation/TechnicalDocPage";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <a
            href=""
            color="transparent"
            target="_blank"
            className={classes.navLink}
        >
            User Documentation
        </a>
    </ListItem>
        <ListItem className={classes.listItem}>
            <a
                href=""
                color="transparent"
                target="_blank"
                className={classes.navLink}
            >
                Technical Documentation
            </a>
        </ListItem>
        <ListItem className={classes.listItem}>
            <a
                href=""
                color="transparent"
                target="_blank"
                className={classes.navLink}
            >
                FAQ
            </a>
        </ListItem>
    </List>
  );
}
