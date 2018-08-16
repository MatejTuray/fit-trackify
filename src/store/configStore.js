import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import filterReducer from "../reducers/filterreducer";
import workoutReducer from "../reducers/workoutsreducer";
import auth from "../reducers/auth"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
const store = createStore(combineReducers({
    workouts: workoutReducer,
    filters: filterReducer,
    auth: auth,
}),
composeEnhancers(applyMiddleware(thunk))

);
 return store
}