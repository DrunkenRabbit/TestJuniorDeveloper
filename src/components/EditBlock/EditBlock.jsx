import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Switch from "@material-ui/core/Switch";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },

    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
    },
    formControl: {
        margin: theme.spacing(3),
        minWidth: 150,
    },
}));


const EditBlock = (props) => {
    const classes = useStyles();
    return (
        <form className={classes.root} noValidate autoComplete="off" style={{margin: 20}}>
            <TextField onChange={(e) => {props.onChangeWorkerName(e.target.value)}}
                       value={props.workerData.name} id="name" label="ФИО"
                       variant="outlined" fullWidth style={{margin: 10}}/>
            <TextField
                style={{margin: 10}}
                id="birth_date"
                label="Дата рождения"
                type="date"
                onChange={(e)=>{props.onChangeWorkerBirthDate(e.target.value);}}
                value={props.workerData.birth_date}
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <FormControl variant="outlined" className={classes.formControl} style={{margin: 10}}>
                <InputLabel id="select-outlined-label">Должность</InputLabel>
                <Select
                    labelId="select-outlined-label"
                    id="position"
                    value={props.workerData.position}
                    onChange={(e) => {props.onChangeWorkerPosition(e.target.value)}}
                    label="Должность"
                >
                    <MenuItem value="">
                        <em>Должность</em>
                    </MenuItem>
                    <MenuItem value={"Programmer"}>Programmer</MenuItem>
                    <MenuItem value={"Manager"}>Manager</MenuItem>
                    <MenuItem value={"Analyst"}>Analyst</MenuItem>
                </Select>
            </FormControl>
            <FormControl component="fieldset" style={{margin: 10}}>
                <FormLabel component="legend">Пол</FormLabel>
                <RadioGroup aria-label="gender" name="gender" value={props.workerData.sex}
                            onChange={(e) => props.onChangeWorkerSex(e.target.value)}>
                    <FormControlLabel value="жен." control={<Radio/>} label="Женский"/>
                    <FormControlLabel value="муж." control={<Radio color="primary"/>} label="Мужской"/>
                </RadioGroup>
            </FormControl>
            <FormControlLabel
                style={{margin: 10}}
                control={
                    <Switch
                        checked={props.workerData.fired}
                        onChange={(e)=>props.onChangeWorkerFired(e.target.checked)}
                        name="checked"
                        color="primary"
                    />
                }
                label="Уволен"
            />
        </form>
    );
}

export default EditBlock;

