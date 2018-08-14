import React from "react"
import ReactDOM from "react-dom"

const Info = (props) => {

    return (
        <div>
            Info is {props.info}
        </div>
    )

}

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
    <div>
        {! props.isAdmin && <p>This is private info!</p> }
        <WrappedComponent {...props}/>
    </div>

    )

}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props}/> : <p>You are not authenticated!</p>}

        </div>

    )
}


const AuthInfo = requireAuthentication(Info);


ReactDOM.render(<AuthInfo isAuthenticated={true} info="lol omg wtf"/>, document.getElementById("app"))