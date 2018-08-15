import React from "react"
import { connect } from "react-redux";
import moment from "moment"
import {Link} from "react-router-dom"
import numeral from "numeral"
const ConnectedWorkout = (props) => {

    return(
        <div>
        <Link to={`/edit/${props.id}`}>
            <h3>{props.description}</h3>
            </Link>
            <p>{numeral(props.amountTime).format("00:00:00")}  - 
            
            {moment(props.createdAt).format(" MMMM Do, YYYY")}</p>
            <p>{props.note}</p>
        </div>
         
        
    )
}

const mapStateToProps = (state) => {
    return{
        state
    }
}

export default connect(mapStateToProps)(ConnectedWorkout)



