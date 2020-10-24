import React from 'react';
import StoreContext from "../../redux/StoreContext";
import EditBlock from "./EditBlock";
import {
    changeWorkerBirthDate,
    changeWorkerFired,
    changeWorkerName,
    changeWorkerPosition,
    changeWorkerSex,
} from "../../redux/reducers/workers_reducer";

class EditBlockContainer extends React.Component {


    render() {
        return <>
            <StoreContext.Consumer>
                {store => {

                    let workerData = store.getState().workers;
                    let changeWorkerBirthDateAC = (birthDate) => store.dispatch(changeWorkerBirthDate(birthDate));
                    let changeWorkerFiredAC = (fired) => store.dispatch(changeWorkerFired(fired));
                    let changeWorkerNameAC = (name) => store.dispatch(changeWorkerName(name));
                    let changeWorkerPositionAC = (position) => store.dispatch(changeWorkerPosition(position));
                    let changeWorkerSexAC = (sex) => store.dispatch(changeWorkerSex(sex));
                    return <EditBlock
                        onChangeWorkerBirthDate={changeWorkerBirthDateAC}
                        onChangeWorkerFired={changeWorkerFiredAC}
                        onChangeWorkerName={changeWorkerNameAC}
                        onChangeWorkerPosition={changeWorkerPositionAC}
                        onChangeWorkerSex={changeWorkerSexAC}
                        workerData={workerData.NewWorker}
                    />
                }
                }
            </StoreContext.Consumer>
        </>
    }

}


export default EditBlockContainer;