import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from "./routers/AppRouter"
import "./styles/styles.scss";
import configStore from "./store/configStore"
import {Provider} from "react-redux"
import {startSetWorkouts} from "./actions/workouts"
import "./firebase/firebase"
import "react-dates/lib/css/_datepicker.css"


const store = configStore();


const jsx = (
    <Provider store={store}><AppRouter/></Provider>
)


ReactDOM.render(<p>Loading...</p>, document.getElementById('app'))

store.dispatch(startSetWorkouts()).then(() => 
    ReactDOM.render(jsx, document.getElementById('app')))





