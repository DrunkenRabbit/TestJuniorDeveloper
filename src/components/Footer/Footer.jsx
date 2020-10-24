import Typography from "@material-ui/core/Typography";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    footer: {
        padding: theme.spacing(6),
    },
}));


export default function Footer(){
    const classes = useStyles();
    return(
        <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
                Junior developer
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                Martynov Danil
            </Typography>
        </footer>

    );
}
