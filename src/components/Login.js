import React from "react"
import {connect} from "react-redux"
import {startLogin} from "../actions/auth"
import GoogleButton from 'react-google-button'
export const Login = (props) => {

    return (
        <div className="login">
            <div className="login-box">
            <h1 className="login-title">FitTrackify</h1>
            <p className="login-text">Track workouts. Get results.</p>
            <GoogleButton className="login-button" onClick={props.startLogin}>Login </GoogleButton>
            
            </div>
        </div>
    )

}
const mapDispatchToProps = (dispatch)  => ({
    startLogin: () => dispatch(startLogin())

});



export default connect(undefined, mapDispatchToProps)(Login)