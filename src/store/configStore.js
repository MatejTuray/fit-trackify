import {createStore, combineReducers} from "redux"
import filterReducer from "../reducers/filterreducer"
import workoutReducer from "../reducers/workoutsreducer"

export default () => {
const store = createStore(combineReducers({
    workouts: workoutReducer,
    filters: filterReducer
}),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
 return store
}