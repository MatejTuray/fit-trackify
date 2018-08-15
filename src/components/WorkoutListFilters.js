import React from "react"
import {connect } from "react-redux"
import { setText, sortByAmount, sortByDate, setEndDate, setStartDate } from "../actions/filters";
import 'react-dates/initialize'
import {DateRangePicker} from "react-dates"
import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet'
import DefaultTheme from 'react-dates/lib/theme/DefaultTheme'

import 'react-dates/lib/css/_datepicker.css'

class WorkoutListFilters extends React.Component {
        constructor(props){
            super(props)
            this.state = {
                calendarFocused: null
            }
            this.onDatesChange = this.onDatesChange.bind(this)
            this.onFocusChange = this.onFocusChange.bind(this)
        }
    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate))

    }
    onFocusChange = (calendarFocused) => {
        this.setState({
            calendarFocused: calendarFocused
        })
    }

    render() { 
        return (
        <div>
            <input type="text" defaultValue="filter me" onChange={(e) => this.props.dispatch(setText(e.target.value))}/>
            <select value={this.props.filters.sortBy} onChange={(e) => {
            if (e.target.value === "amountTime") { 
                this.props.dispatch(sortByAmount())
            } 
            else if (e.target.value === "date"){
                this.props.dispatch(sortByDate())}
            }}>
                <option value="amountTime">Workout length</option>
                <option value="date">Date</option>

            </select>
            <DateRangePicker startDateId="start" endDateId="end" startDate={this.props.filters.startDate} endDate={this.props.filters.endDate} onDatesChange={this.onDatesChange} focusedInput={this.state.calendarFocused} onFocusChange={this.onFocusChange
            } numberOfMonths={1} isOutsideRange={() => false } showClearDates={true}/>
        </div>
        )

    }

}
const mapStateToProps = (state) => {
    return{
        filters: state.filters
    }
}

export default connect(mapStateToProps)(WorkoutListFilters)