import React from 'react';
import Main from "./Main";
import StoreContext from "../../redux/StoreContext";
import {addNewWorker, clearEditBlock, deleteWorker} from "../../redux/reducers/workers_reducer";

class MainContainer extends React.Component {



    render() {
        return <>
            <StoreContext.Consumer>
                {store=>{
                    let workers = store.getState().workers;
                    let onAddNewWorker = ()=>{
                        store.dispatch(addNewWorker())
                    }
                    let DeleteWorker=()=>{
                        store.dispatch(deleteWorker())
                        store.dispatch(clearEditBlock())
                    }
                    let clearEdit=()=>{
                        store.dispatch(clearEditBlock())
                    }


                    return <Main
                        workers={workers}
                        clearEdit={clearEdit}
                        DeleteWorker={DeleteWorker}
                        AddNewWorker={onAddNewWorker}
                    />
                }
            }
            </StoreContext.Consumer>
        </>
    }

}



export default MainContainer;