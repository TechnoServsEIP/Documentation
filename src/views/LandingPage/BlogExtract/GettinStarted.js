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

export default function RecipeReviewCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image="https://static.ghost.org/v3.0.0/images/organising-your-content.png"
            />
            <CardContent >
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    User Documentation
                </Typography>
                <Typography variant="h5" component="h2">
                   Getting Started
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Ce document a pour but d’établir un guide de l’utilisateur qui permettrait à toute personne d’utiliser notre solution.
                    TechnoServs est une solution de hosting de serveurs de jeux vidéos...
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Link to={'/documentation/user'}>
                <Button size="small" color={"secondary"} variant={"outlined"}>Learn More</Button>
                </Link>
                <Typography className={classes.readTime} color="textSecondary" gutterBottom>
                    5min Read
                </Typography>
            </CardActions>
        </Card>
    );
}
