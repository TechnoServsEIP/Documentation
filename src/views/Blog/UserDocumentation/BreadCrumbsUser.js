/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Link from '@material-ui/core/Link';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

import { Route, MemoryRouter } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';

const breadcrumbNameMap = {
    '/gettingStarted': 'Getting Started',
    '/createServer': 'Create A Server',
    '/createAnAccount': 'Create An Account',
    '/drafts': 'Drafts',
};

function ListItemLink(props) {
    const { to, open, ...other } = props;
    const primary = breadcrumbNameMap[to];

    return (
        <li>
            <ListItem button component={RouterLink} to={to} {...other}>
                <ListItemText primary={primary} />
                {open != null ? open ? <ExpandLess /> : <ExpandMore /> : null}
            </ListItem>
        </li>
    );
}

ListItemLink.propTypes = {
    open: PropTypes.bool,
    to: PropTypes.string.isRequired,
};

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        background: 'primary',
    },
    lists: {
        Color: "primary",
        marginTop: theme.spacing(1),
    },
    nested: {
        paddingLeft: theme.spacing(3),
    },
}));

const LinkRouter = (props) => <Link {...props} component={RouterLink} />;

export default function BreadcrumbsUser() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    return (
            <MemoryRouter initialEntries={['/gettingStarted']} initialIndex={0}>
            <div className={classes.root}>
                <Route>
                    {({ location }) => {
                        const pathnames = location.pathname.split('/').filter((x) => x);

                        return (
                            <Breadcrumbs aria-label="breadcrumb">
                                <LinkRouter color="inherit" to="/">
                                </LinkRouter>
                                {pathnames.map((value, index) => {
                                    const last = index === pathnames.length - 1;
                                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                                    return last ? (
                                        <Typography color="textPrimary" key={to}>
                                            {breadcrumbNameMap[to]}
                                        </Typography>
                                    ) : (
                                        <LinkRouter color="inherit" to={to} key={to}>
                                            {breadcrumbNameMap[to]}
                                        </LinkRouter>
                                    );
                                })}
                            </Breadcrumbs>
                        );
                    }}
                </Route>
                <nav className={classes.lists} aria-label="mailbox folders">
                    <List>
                        <ListItemLink to="/gettingStarted"/>
                        <ListItemLink to="/createServer" />
                        <ListItemLink to="/createAnAccount" />
                    </List>
                </nav>
            </div>
            </MemoryRouter>
    );
}
