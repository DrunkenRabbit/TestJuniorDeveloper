import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';


export default function WorkersTable(props) {
    const workerList=props.workers.workers;
    const columns = props.columns;
    const classes = makeStyles({
        root: {
            width: '100%',
        },
        container: {
            maxHeight: 550,
        },
    });

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };


    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const clickOnTrElement=(id)=>{
        props.setNewDeleteId(id);
    }

    const formatDate = (date) => {
        let day = "";
        let month = "";
        let year = "";
        for (let i = 0; i < date.length; i++) {
            if (date[i] !== "-") {
                if (i < 4) {
                    year += date[i];
                }
                if (i > 4 && i < 7) {
                    month += date[i];
                }
                if (i > 7) {
                    day += date[i];
                }
            }
        }
        return day + "." + month + "." + year;
    }

    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    style={{minWidth: column.minWidth}}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {workerList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                                <TableRow id={row.id} onClick={()=>clickOnTrElement(row.id)} selected={row.id === props.workers.deleteId} hover role="checkbox" tabIndex={-1} key={row.id} >
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} >
                                                {typeof value === 'boolean' ? (value)?"ДА":"НЕТ" : column.id==="birth_date"? formatDate(value) : value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 8, 10]}
                component="div"
                count={workerList.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
