const CREATE_NEW_WORKER = "CREATE_NEW_WORKER";
const CHANGE_WORKER_NAME = "CHANGE_WORKER_NAME";
const CHANGE_WORKER_POSITION = "CHANGE_WORKER_POSITION";
const CHANGE_WORKER_BIRTH_DATE = "CHANGE_WORKER_BIRTH_DATE";
const CHANGE_WORKER_SEX = "CHANGE_WORKER_SEX";
const CHANGE_WORKER_FIRED = "CHANGE_WORKER_FIRED";
const GET_WORKER_DATA_BY_ID = "GET_WORKER_DATA_BY_ID";
const SET_ID_FOR_DELETE = "SET_ID_FOR_DELETE";
const CLEAR_EDIT_BLOCK = "CLEAR_EDIT_BLOCK";

const DELETE_WORKER = "DELETE_WORKER";

let initialState = {
    workers: [
        {
            "id": 1,
            "name": "Андрей",
            "position": 'Programmer',
            "birth_date": "2000-05-24",
            "sex": "муж.",
            "fired": false,
        },
        {
            "id": 2,
            "name": "Григорий",
            "position": 'Programmer',
            "birth_date": "2000-05-24",
            "sex": "муж.",
            "fired": false,
        },
        {
            "id": 3,
            "name": "Давид",
            "position": 'Programmer',
            "birth_date": "2000-05-24",
            "sex": "муж.",
            "fired": false,
        },
        {
            "id": 4,
            "name": "Алёна",
            "position": 'Programmer',
            "birth_date": "2000-05-24",
            "sex": "жен.",
            "fired": false,
        },
    ],
    NewWorker: {
        name: "",
        position: "",
        birth_date: "2000-05-24",
        sex: "",
        fired: false,
    },
    deleteId: undefined,
    count: 5,
    errorMessage: ""

};

const workersReducer = (store = initialState, action) => {
    switch (action.type) {
        case CREATE_NEW_WORKER:
            if (store.NewWorker.name !== "" && store.NewWorker.position !== "") {
                store.count += 1;
                store.errorMessage=""
                let newWorker = {
                    "id": store.count,
                    "name": store.NewWorker.name,
                    "position": store.NewWorker.position,
                    "birth_date": store.NewWorker.birth_date,
                    "sex": store.NewWorker.sex,
                    "fired": store.NewWorker.fired,
                }
                return {...store, workers: [...store.workers, newWorker],deleteId: store.count}
            } else {
                store.errorMessage = "Поля ФИО и Должность должны быть заполнены";
                return store;
            }
        case SET_ID_FOR_DELETE:
            if (action.deleteId !== undefined) {
                return {
                    ...store,
                    deleteId: action.deleteId
                }
            } else {
                return store;
            }
        case DELETE_WORKER:
            if (store.deleteId !== undefined) {
                const newWorkers = store.workers.filter(n => n.id !== store.deleteId);
                return {
                    ...store, workers: newWorkers, deleteId: undefined
                }
            }
            break;
        case CHANGE_WORKER_NAME:
            if(store.deleteId){
                for (let i=0; i<store.workers.length; i++){
                    if(store.workers[i].id === store.deleteId){
                        store.workers[i].name = action.name;
                    }
                }
                return {
                    ...store,
                    NewWorker: {...store.NewWorker, name: action.name }
                };
            }
            if (action.name !== undefined) {
                return {
                    ...store,
                    NewWorker: {...store.NewWorker, name: action.name }
                }
            }
            break;
        case CHANGE_WORKER_POSITION:
            if(store.deleteId){
                for (let i=0; i<store.workers.length; i++){
                    if(store.workers[i].id === store.deleteId){
                        store.workers[i].position = action.position;
                    }
                }
                return {
                    ...store,
                    NewWorker: {...store.NewWorker, position: action.position }
                }
            }
            if (action.position !== undefined) {
                return {
                    ...store,
                    NewWorker: {...store.NewWorker, position: action.position }
                }
            }
            break;
        case CHANGE_WORKER_BIRTH_DATE:
            if(store.deleteId){
                for (let i=0; i<store.workers.length; i++){
                    if(store.workers[i].id === store.deleteId){
                        store.workers[i].birth_date = action.birth_date;
                    }
                }
                return {
                    ...store, NewWorker: {...store.NewWorker, birth_date: action.birth_date }
                }
            }
            if (action.birth_date !== undefined) {
                return {
                    ...store, NewWorker: {...store.NewWorker, birth_date: action.birth_date }
                }
            }
            break;
        case CHANGE_WORKER_SEX:
            if(store.deleteId){
                for (let i=0; i<store.workers.length; i++){
                    if(store.workers[i].id === store.deleteId){
                        store.workers[i].sex = action.sex;
                    }
                }
                return {
                    ...store, NewWorker: {...store.NewWorker, sex: action.sex }
                }
            }
            if (action.sex !== undefined) {
                return {
                    ...store, NewWorker: {...store.NewWorker, sex: action.sex }
                }
            }
            break;
        case GET_WORKER_DATA_BY_ID:
            if (action.id !== undefined) {
                let needPerson;
                for (let i=0; i<store.workers.length; i++){
                    if(store.workers[i].id === action.id){
                        needPerson = store.workers[i];
                    }
                }
                store.NewWorker = needPerson;
                return store;
            }
            break;
        case CHANGE_WORKER_FIRED:
            if(store.deleteId){
                for (let i=0; i<store.workers.length; i++){
                    if(store.workers[i].id === store.deleteId){
                        store.workers[i].fired = action.fired;
                    }
                }
                return {
                    ...store, NewWorker: {...store.NewWorker, fired: action.fired }
                }
            }
            if (action.fired !== undefined) {
                return {
                    ...store, NewWorker: {...store.NewWorker, fired: action.fired }
                }
            }
            break;
        case CLEAR_EDIT_BLOCK:
            let clear = {
                "id": "",
                "name": "",
                "position": "",
                "birth_date": "2000-05-24",
                "sex": "",
                "fired": false,
            }
            return {...store, NewWorker: clear, deleteId: undefined}

        default:
            return store;
    }

};
export const changeWorkerName = (name) => ({type: CHANGE_WORKER_NAME,name});
export const changeWorkerPosition = (position) => ({type: CHANGE_WORKER_POSITION,position});
export const changeWorkerBirthDate = (birth_date) => ({type: CHANGE_WORKER_BIRTH_DATE,birth_date});
export const changeWorkerSex = (sex) => ({type: CHANGE_WORKER_SEX,sex});
export const changeWorkerFired = (fired) => ({type: CHANGE_WORKER_FIRED,fired});
export const addNewWorker = () => ({type: CREATE_NEW_WORKER,});
export const setDeleteId = (deleteId) => ({type: SET_ID_FOR_DELETE, deleteId});
export const deleteWorker = () => ({type: DELETE_WORKER,});
export const getWorkerById = (id) => ({type: GET_WORKER_DATA_BY_ID,id});
export const clearEditBlock = () => ({type: CLEAR_EDIT_BLOCK,});

export default workersReducer;
