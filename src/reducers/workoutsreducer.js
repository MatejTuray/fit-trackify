const workoutReducerDefault = []

export default  (state = workoutReducerDefault, action) => {
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