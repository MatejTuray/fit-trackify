import React from 'react';
import ConnectedWorkoutList from "./WorkoutList"
import WorkoutListFilters from "./WorkoutListFilters"
const Dashboard = (props) => (
    <div>
        <WorkoutListFilters/>
        <ConnectedWorkoutList />

     </div>
    );

export default Dashboard