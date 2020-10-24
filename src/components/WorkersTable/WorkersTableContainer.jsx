import React from 'react';
import WorkersTable from "./WorkersTable";
import StoreContext from "../../redux/StoreContext";
import {getWorkerById, setDeleteId, } from "../../redux/reducers/workers_reducer";

class WorkersTableContainer extends React.Component {

    columns = [
        {id: 'name', label: 'ФИО', minWidth: 100},
        {id: 'position', label: 'Должность', minWidth: 60},
        {id: 'birth_date', label: 'Дата рождения', minWidth: 60},
        {id: 'sex', label: 'Пол', minWidth: 100},
        {id: 'fired', label: 'Уволен', minWidth: 60},
    ];



    render() {
        return <StoreContext.Consumer>
            {store=>{
                let setNewDeleteId = (id)=>{
                    store.dispatch(getWorkerById(id));
                    store.dispatch(setDeleteId(id));
                }
                let workers = store.getState().workers;
                return <WorkersTable
                    columns={this.columns}
                    setNewDeleteId={setNewDeleteId}
                    useStyles={this.useStyles}
                    workers={workers}
                />
            }

        }

        </StoreContext.Consumer>
    }

}



export default WorkersTableContainer;