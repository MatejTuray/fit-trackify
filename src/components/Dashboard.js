import React from 'react';
import ConnectedWorkoutList from "./WorkoutList"
import WorkoutListFilters from "./WorkoutListFilters"
import WorkoutSummary from './WorkoutSummary';
const Dashboard = (props) => (
    <div>
        <WorkoutSummary/>
        <WorkoutListFilters/>
        <ConnectedWorkoutList />

     </div>
    );

export default Dashboard