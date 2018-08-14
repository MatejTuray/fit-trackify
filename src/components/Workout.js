import React from "react"
import { connect } from "react-redux";

import {Link} from "react-router-dom"

const ConnectedWorkout = (props) => {

    return(
        <div>
        <Link to={`/edit/${props.id}`}>
            <h3>{props.description}</h3>
            </Link>
            <p>{props.amountTime} - {props.createdAt}</p>
            
        </div>
         
        
    )
}

const mapStateToProps = (state) => {
    return{
        state
    }
}

export default connect(mapStateToProps)(ConnectedWorkout)



