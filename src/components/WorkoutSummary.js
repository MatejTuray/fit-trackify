import React from "react"
import {connect} from "react-redux"
import visibleWorkouts from "../selectors/visibleWorkouts"
import totalWorkouts from "../selectors/totalWorkouts"
import numeral from "numeral"

const WorkoutSummary = (props) => {
    return (
        <div>
            <h1>Viewing {props.workouts.length} {props.workouts.length === 1 ? "workout" : "workouts"}, with the total workout duration of {numeral(props.totals).format("00:00:00")} </h1>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        workouts: visibleWorkouts(state.workouts, state.filters),
        totals: totalWorkouts(state.workouts)
    }
}




export default connect(mapStateToProps)(WorkoutSummary)