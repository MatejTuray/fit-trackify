import React from "react"
import {connect} from "react-redux"
import Workout from "./Workout"
import visibleWorkouts from "../selectors/visibleWorkouts"


const WorkoutList = (props) => {
    return (
        <div>
            <h1>Workout List</h1>
            {props.workouts.map((workout) => <Workout id={workout.id} key={workout.id} description={workout.description} amountTime={workout.amountTime} createdAt={workout.createdAt} note={workout.note} /> )}
            
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
       workouts: visibleWorkouts(state.workouts, state.filters)

    }
}

export default  connect(mapStateToProps)(WorkoutList);