import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from "./routers/AppRouter"
import "./styles/styles.scss";
import configStore from "./store/configStore"
import {Provider} from "react-redux"
const store = configStore();


const jsx = (
    <Provider store={store}><AppRouter/></Provider>
)
 

ReactDOM.render(jsx, document.getElementById('app'));

