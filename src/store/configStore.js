import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import filterReducer from "../reducers/filterreducer";
import workoutReducer from "../reducers/workoutsreducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
const store = createStore(combineReducers({
    workouts: workoutReducer,
    filters: filterReducer
}),
composeEnhancers(applyMiddleware(thunk))

);
 return store
}