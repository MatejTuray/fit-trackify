import moment from "moment"

export default (workouts, {text, sortBy, startDate,endDate}) => {
    return workouts.filter((workout) => {
    workout.description = workout.description.toLowerCase()
    text = text.toLowerCase()
    const createdAtMoment = moment(workout.createdAt)
    const startDateMatch  = startDate ? startDate.isSameOrBefore(createdAtMoment,"day") : true
    const endDateMatch = endDate? endDate.isSameOrAfter(createdAtMoment, "day") : true;
    const textMatch = typeof text !== "string" || workout.description.includes(text)
        return startDateMatch && endDateMatch && textMatch
    }).sort((a,b) => {
        if (sortBy === "date"){
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        else if (sortBy === "amount"){
            return a.amountTime < b.amountTime
        }
    })

}