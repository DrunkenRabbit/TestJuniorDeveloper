import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import WorkersTableContainer from "../WorkersTable/WorkersTableContainer";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import EditBlockContainer from "../EditBlock/EditBlockContainer";


export default function Main(props) {
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            marginTop: theme.spacing(3),
        },
        rootGrid: {
            paddingTop: theme.spacing(8),
            paddingBottom: theme.spacing(8),
        },


    }));
    const classes = useStyles();

    return(
        <main>
        <Container className={classes.rootGrid}>
            <Grid container className={classes.root} justify={'center'} spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" noWrap>
                        Список работников
                    </Typography>
                    <WorkersTableContainer />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" noWrap>
                        Карточка работника
                    </Typography>
                    <Typography variant="h6" noWrap color={"secondary"}>
                        {props.workers.errorMessage}
                    </Typography>
                    <Grid item md={12}>
                        <EditBlockContainer />
                    </Grid>
                    <Grid item md={12}>
                        <ButtonGroup size="large" aria-label="large outlined primary button group">
                            <Button onClick={()=>props.AddNewWorker()} color="primary">Добавить</Button>
                            <Button onClick={()=>props.DeleteWorker()} disabled={(undefined === props.workers.deleteId)} color="secondary">Удалить</Button>
                            <Button onClick={()=>props.clearEdit()}>Очистка</Button>
                        </ButtonGroup>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    </main>
    )
}