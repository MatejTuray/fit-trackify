import React from "react"
import {connect} from "react-redux"
import visibleWorkouts from "../selectors/visibleWorkouts"
import totalWorkouts from "../selectors/totalWorkouts"
import numeral from "numeral"
import {BrowserRouter,Route,Switch,Link,NavLink} from "react-router-dom";

const WorkoutSummary = (props) => {
    return (
        <div className="page-header">
            <div className="container">
            <h1 className="lead">Viewing <span>{props.workouts.length}</span> {props.workouts.length === 1 ? "workout" : "workouts"}, with the total workout duration of <span>{numeral(props.totals).format("00:00:00")}</span></h1>
            <div className="page-header-action">
            <Link className="btn btn-primary btn-lg" to="/create"> <i className="fas fa-plus-circle"></i> Add new </Link>
            </div>
            </div>
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