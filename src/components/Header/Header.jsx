import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import GitHubIcon from "@material-ui/icons/GitHub";
import Typography from "@material-ui/core/Typography";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },

}));


export default function Header(props){
    const classes = useStyles();
    return(
        <div>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <GitHubIcon className={classes.icon} />
                    <Typography variant="h6" color="inherit" noWrap>
                        Workers
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>

    );
}
