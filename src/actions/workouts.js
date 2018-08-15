import uuid from "uuid"
import database from "../firebase/firebase"

export const addWorkout = (workout) => {
    return {
        type: "ADD_WORKOUT",
        workout
    }
}

export const startAddWorkout = ({ description="",note="",amountTime=0, createdAt=0 } = {}) => {
    return (dispatch) =>  {
        const workout = {
            description,
            note,
            amountTime,
            createdAt,
        }

        database.ref("workouts").push(workout).then((ref) => {dispatch(addWorkout(
            {
                id: ref.key,
                ...workout
                
            }       
        
        ))})
    }
}

export const removeWorkout = ({ id } = {}) =>{
    return {
        type: "REMOVE_WORKOUT",
        id,
        }
    }

export const startRemoveWorkout = ({ id } = {}) => {
    return  (dispatch) => {
     return database.ref(`workouts/${id}`).remove().then(() => {dispatch(removeWorkout({id}))})
    }
}

export const editWorkout = (id, updates) => ({
  
        type: "EDIT_WORKOUT",
        id,
        updates
    
})

export const startEditWorkout = (id,updates) => {
    return (dispatch) => {
        return database.ref(`workouts/${id}`).update({
            ...updates
        }).then(() => { dispatch(editWorkout(id,updates))})
    }
}

export const setWorkouts = (workouts) => ({
    type: "SET_WORKOUT",
    workouts
})

export const startSetWorkouts = () => {
    return (dispatch) => {
       return database.ref("workouts").once("value").then((snapshot) => {const workouts = []; snapshot.forEach((childSnapshot) => {
            workouts.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
            })
             
        })
        dispatch(setWorkouts(workouts))  
        },
    )
      
    };
   
}
    
