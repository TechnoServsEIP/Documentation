import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        minWidth: 275,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    readTime: {
        fontSize: 14,
        marginLeft: 'auto',
    }
}));

export default function GettingStartedUserCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image="https://i.imgur.com/viKsEdc.png"
            />
            <CardContent >
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Documentation Utilisateur
                </Typography>
                <Typography variant="h5" component="h2">
                    Créer un serveur
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Ce document a pour but d’établir un guide afin de créer son propre serveur de jeux.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Link to={'/documentation/create-server'}>
                    <Button size="small" color={"secondary"} variant={"outlined"}>En savoir plus</Button>
                </Link>
                <Typography className={classes.readTime} color="textSecondary" gutterBottom>
                    6min Read
                </Typography>
            </CardActions>
        </Card>
    );
}
