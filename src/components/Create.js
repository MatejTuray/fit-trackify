import React from 'react';
import WorkoutForm from "./WorkoutForm"
import {connect} from "react-redux"
import { addWorkout } from '../actions/workouts';
const Create = (props) => (
    <div>
         <h1>Add Workout</h1>
         <WorkoutForm onSubmit={(workout) => { props.dispatch(addWorkout(workout)); props.history.push("/") } }/>
 
     </div>
    );


export default connect()(Create)