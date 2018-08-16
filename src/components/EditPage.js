import React from 'react';
import {connect} from "react-redux"
import WorkoutForm from "./WorkoutForm"
import { startEditWorkout } from '../actions/workouts';
import { startRemoveWorkout } from "../actions/workouts";
const EditPage = (props) => {
    
    console.log(props)
    return (
        
            <div>
                <WorkoutForm workout={props.workout} onSubmit={(workout) => { console.log("updated!", workout); props.dispatch(startEditWorkout(props.workout.id, workout)); props.history.push("/dashboard") }}/>
                <button onClick={() => { props.dispatch(startRemoveWorkout({id: props.workout.id}));  props.history.push("/dashboard") } } >Remove</button>
            </div>
        
    );
}
const mapStateToProps = (state, props) => {
    return{
        workout : state.workouts.find((workout) =>  workout.id === props.match.params.id )
    }

}

export default connect(mapStateToProps)(EditPage)