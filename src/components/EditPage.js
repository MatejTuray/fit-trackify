import React from 'react';
import {connect} from "react-redux"
import WorkoutForm from "./WorkoutForm"
import { startEditWorkout } from '../actions/workouts';
import { startRemoveWorkout } from "../actions/workouts";
const EditPage = (props) => {
    
    console.log(props)
    return (
        
            <div className="page-header">
            <div className="container">
                <h1 className="lead">Edit Workout</h1>
                <div className="page-header-action">
                
                </div>
            </div>
                <div className="container" >
                <WorkoutForm workout={props.workout} onSubmit={(workout) => { console.log("updated!", workout); props.dispatch(startEditWorkout(props.workout.id, workout)); props.history.push("/dashboard") }}/>
                <button className="btn btn-secondary btn-lg" onClick={() => { props.dispatch(startRemoveWorkout({id: props.workout.id}));  props.history.push("/dashboard") } } ><i className="fas fa-minus-circle"></i> Remove a workout</button>
                </div>
            </div>
        
    );
}
const mapStateToProps = (state, props) => {
    return{
        workout : state.workouts.find((workout) =>  workout.id === props.match.params.id )
    }

}

export default connect(mapStateToProps)(EditPage)