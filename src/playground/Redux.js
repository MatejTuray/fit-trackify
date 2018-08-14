import {createStore, combineReducers} from "redux"
import uuid from "uuid"

const addWorkout = ({description="",note="",amountTime=0, createdAt=0} = {}) => {
    return {
        type: "ADD_WORKOUT",
        workout: {
            id: uuid(),
            description: description,
            note: note,
            amountTime: amountTime,
            createdAt: createdAt,
        }
    }
}

const removeWorkout = ({ id } = {}) =>{
    return {
        type: "REMOVE_WORKOUT",
        id,
        }
    }


const editWorkout = (id, updates) => ({
  
        type: "EDIT_WORKOUT",
        id,
        updates
    
})

const setText = (textValue) => ({
    type: "SET_TEXT",
    textValue,
})

const sortByAmount = () => ({
    type: "SORT_BY_AMOUNT"

})
const sortByDate = () => ({
    type: "SORT_BY_DATE"

})

const setStartDate = (startDate) => ({
    type: "SET_START_DATE",
    startDate,
})
const setEndDate = (endDate) => ({
    type: "SET_END_DATE",
    endDate,
})

const getFilteredWorkouts = (workouts, {text, sortBy, startDate,endDate}) => {
    return workouts.filter((workout) => {
    workout.description = workout.description.toLowerCase()
    text = text.toLowerCase()
    const startDateMatch  = typeof startDate !== "number" || workout.createdAt >= startDate; 
    const endDateMatch = typeof endDate !== "number" || workout.createdAt >= endDate; 
    const textMatch = typeof text !== "string" || workout.description.includes(text)
        return startDateMatch && endDateMatch && textMatch
    }).sort((a,b) => {
        if (sortBy === "date"){
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        else if (sortBy === "amount"){
            return a.amountTime > b.amountTime
        }
    })

}
const workoutReducerDefault = []

const workoutReducer = (state = workoutReducerDefault, action) => {
    switch(action.type){
        case "ADD_WORKOUT":
          return  [...state,action.workout]
        case "REMOVE_WORKOUT":                     
          return state.filter((workout) => {
              return workout.id !== action.id})
        case "EDIT_WORKOUT":
            return state.map((workout) => { if (workout.id === action.id) {
                return{
                ...workout,
                ...action.updates
                }
            }
            else{
                return workout
            }
        })
        default:
            return state
    }
}
const filterReducerDefault = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined,
}
const filterReducer = (state = filterReducerDefault, action) =>{
    switch(action.type){
        case "SET_TEXT":
        return {
            ...state,
            text : action.textValue    
        }
        case "SORT_BY_AMOUNT":
        return{
            ...state,
            sortBy : "amount"
        }
        case "SORT_BY_DATE":
        return{
            ...state,
            sortBy: "date"
        }
        case "SET_START_DATE":
        return{
            ...state,
            startDate : action.startDate,
        }
        case "SET_END_DATE":
        return{
            ...state,
            endDate : action.endDate,
        }
        default:
            return state
    }
}

const store = createStore(combineReducers({
    workouts: workoutReducer,
    filters: filterReducer
}));


store.subscribe(()=>{
    const state = store.getState()
    const filteredData = getFilteredWorkouts(state.workouts, state.filters)

        console.log(filteredData)
})

const action1 = store.dispatch(addWorkout({description:"Heavy lifting", amountTime: 120000, createdAt: -2000}))

const action2 = store.dispatch(addWorkout({description:"Cardio", amountTime: 50000, createdAt: -1000}))




store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

// store.dispatch(editWorkout(action2.workout.id, {description: "Whatever"}))
 
 
// //  store.dispatch(setStartDate(200))
// /*  store.dispatch(setStartDate(2000))
//  store.dispatch(setStartDate()) */
//  store.dispatch(setEndDate(3000))
// /*  store.dispatch(setEndDate(3000))
//  store.dispatch(setEndDate())  */

