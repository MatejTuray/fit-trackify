import React from "react"
import moment from "moment"
import 'react-dates/initialize'
import {SingleDatePicker} from "react-dates"
import "react-dates/lib/css/_datepicker.css"

const now = moment()

console.log(now.format("DD MMM, YYYY"))

export default class WorkoutForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            description: this.props.workout ? this.props.workout.description : "",
            note: this.props.workout ? this.props.workout.note : "",
            amountTime: this.props.workout ? this.props.workout.amountTime.toString() : "" ,
            createdAt: this.props.workout ? moment(this.props.workout.createdAt) : moment(),
            calendarFocused : false,
            error: ""
    
        }

        this.onDescriptionChange = this.onDescriptionChange.bind(this)
        this.onNoteChange = this.onNoteChange.bind(this)
        this.onAmountChange = this.onAmountChange.bind(this)
        this.onDateChange = this.onDateChange.bind(this)
        this.onFocusChange = this.onFocusChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    
    }

    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState({
            description: description,
        })

      
    }

    onNoteChange = (e) => {
        const note = e.target.value
        this.setState({
            note: note,
        })
    }

    onAmountChange = (e) => {
        const time = e.target.value
        console.log(time)
        if (! time || time.match(/^\d{1,}$/)){
            this.setState({
                amountTime: time,
            })
        }
    }

    onDateChange = (createdAt) => {
        if(createdAt){
        this.setState({
            createdAt: createdAt
        })
    }
    }

    onFocusChange = ( {focused} ) => {
        this.setState({
            calendarFocused: focused
        })

    }

    onSubmit = (e) => {
        e.preventDefault()
        if(! this.state.description || !this.state.amountTime){
            this.setState({
                error: "Check your description and time"
            })
            
        }
        else {
            this.setState({
                error: ""
            })
            console.log("submitted!")
            this.props.onSubmit({
                description: this.state.description,
                amountTime: parseInt(this.state.amountTime * 60),
                note: this.state.note,
                createdAt: this.state.createdAt.valueOf()
            })
        }
    }


    render(){
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    {this.state.error !== "" ? <p>{this.state.error}</p> : undefined}
                    <input type="text" placeholder="Workout description" autoFocus value={this.state.description} onChange={this.onDescriptionChange}/>
                    <input type="number" placeholder="Workout length in minutes" value={this.state.amountTime} onChange={this.onAmountChange} min={0}  />
                    <SingleDatePicker  isOutsideRange={() => false} numberOfMonths= {1} date={this.state.createdAt} onDateChange={this.onDateChange} focused={this.state.calendarFocused} onFocusChange={this.onFocusChange}  />
                    <textarea placeholder="Add notes about your workout" value={this.state.note} onChange={this.onNoteChange}></textarea>
                    <button>Add Workout</button>
                    
                </form>

            </div>
            
        )
    }
}


