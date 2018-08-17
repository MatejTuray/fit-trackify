import React from 'react';
import WorkoutForm from "./WorkoutForm"
import {connect} from "react-redux"
import { startAddWorkout } from '../actions/workouts';
const Create = (props) => (
    <div>
    <div className="page-header">
    <div className="container">
         <h1 className="lead">Add Workout</h1>
         </div>
         </div>
         <div className="container">
         <WorkoutForm onSubmit={(workout) => { props.dispatch(startAddWorkout(workout)); props.history.push("/dashboard") } }/>
         </div>
         
         </div> 
     
    );


export default connect()(Create)