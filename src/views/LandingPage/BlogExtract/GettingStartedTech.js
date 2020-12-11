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

export default function GettingStartedTechCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image="https://i.imgur.com/pKz6Fek.png"
            />
            <CardContent >
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Documentation Technique
                </Typography>
                <Typography variant="h5" component="h2">
                    Présentation
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Ce document sert d'introduction à la partie technique de TechnoServs.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Link to={'/documentation/register'}>
                    <Button size="small" color={"secondary"} variant={"outlined"}>En savoir plus</Button>
                </Link>
                <Typography className={classes.readTime} color="textSecondary" gutterBottom>
                    7min Read
                </Typography>
            </CardActions>
        </Card>
    );
}
