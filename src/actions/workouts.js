import uuid from "uuid"

export const addWorkout = ({description="",note="",amountTime=0, createdAt=0} = {}) => {
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

export const removeWorkout = ({ id } = {}) =>{
    return {
        type: "REMOVE_WORKOUT",
        id,
        }
    }


export const editWorkout = (id, updates) => ({
  
        type: "EDIT_WORKOUT",
        id,
        updates
    
})