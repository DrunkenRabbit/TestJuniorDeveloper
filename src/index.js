import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from "./redux/redux-store";
import * as serviceWorker from './serviceWorker';
import Header from "./components/Header/Header";
import MainContainer from "./components/Main/MainContainer";
import Footer from "./components/Footer/Footer";
import StoreContext from "./redux/StoreContext";

const App = (props)=>{
    return(
        <>
            <Header />
            <MainContainer />
            <Footer/>
        </>
    )
}


const rerenderEntireTree =()=>{
    ReactDOM.render(
        <StoreContext.Provider value={store}>
            <App />
        </StoreContext.Provider>,
        document.getElementById('root')
    );
};


rerenderEntireTree();


store.subscribe(()=> {
    rerenderEntireTree();
});


serviceWorker.unregister();
