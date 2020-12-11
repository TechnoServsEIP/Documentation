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
                image="https://thumbor.sd-cdn.fr/Z88vGH2Y4hYXPXTEJw4X3fzC6ZQ=/fit-in/1600x1000/cdn.sd-cdn.fr/wp-content/uploads/2019/09/minecraft-facebook.jpg"
            />
            <CardContent >
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Documentation Utilisateur
                </Typography>
                <Typography variant="h5" component="h2">
                    Utiliser son serveur
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Ce document a pour but d’établir un guide afin de pouvoir se connecter à son serveur de jeux.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Link to={'/documentation/connect-to-server'}>
                    <Button size="small" color={"secondary"} variant={"outlined"}>En savoir plus</Button>
                </Link>
                <Typography className={classes.readTime} color="textSecondary" gutterBottom>
                    6min Read
                </Typography>
            </CardActions>
        </Card>
    );
}
