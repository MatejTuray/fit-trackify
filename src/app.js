import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from "./routers/AppRouter"
import "./styles/styles.scss";
import configStore from "./store/configStore"
import filters, { sortByAmount, setText } from "./actions/filters"
import {addWorkout,editWorkout,removeWorkout} from "./actions/workouts"
import visibleWorkouts from "./selectors/visibleWorkouts"
import {Provider} from "react-redux"
const store = configStore();

store.subscribe(() => {
    const state = store.getState()
    const filteredData = visibleWorkouts(state.workouts, state.filters)

        console.log(filteredData)
})

store.dispatch(addWorkout({description: "Lifting 101", note:"What the hell", amountTime: 0 , createdAt: 20}))
store.dispatch(addWorkout({description: "Cardio", note:"My legs!!", amountTime: 12000, createdAt: 0 }))
store.dispatch(addWorkout({description: "Hardio", note:"My legs?", amountTime: 15000, createdAt: 0 }))

const jsx = (
    <Provider store={store}><AppRouter/></Provider>
)
 

ReactDOM.render(jsx, document.getElementById('app'));

