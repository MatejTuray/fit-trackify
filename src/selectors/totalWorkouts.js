

export default (workouts) => {
   
    if (workouts.length === 0) {
        return 0
    }
    else {
        return workouts.map((workout) => workout.amountTime).reduce((prev, curr) => prev + curr, 0)

    }




};