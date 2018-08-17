import React from "react"
import { connect } from "react-redux";
import moment from "moment"
import {Link} from "react-router-dom"
import numeral from "numeral"
const ConnectedWorkout = (props) => {

    return(
       
            <Link className="list-item" to={`/edit/${props.id}`}>
            <div >
            <h3 className="list-item-title">{props.description}</h3>
            <span className="list-item-subtitle">{moment(props.createdAt).format(" MMMM Do, YYYY")}</span>
            <p>{props.note}</p>
            </div>
            
            <h3 className="list-item-data">{numeral(props.amountTime).format("00:00:00")}</h3>      
                       
             
             
            </Link>
  
         
        
    )
}

const mapStateToProps = (state) => {
    return{
        state
    }
}

export default connect(mapStateToProps)(ConnectedWorkout)



