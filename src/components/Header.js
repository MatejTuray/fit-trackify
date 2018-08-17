import React from 'react';
import {BrowserRouter,Route,Switch,Link,NavLink} from "react-router-dom";
import {connect} from "react-redux"
import {startLogout} from "../actions/auth"
const Header = (props) => (
    
    <header className="header">
        <div>
            <div className="header-content">
        <Link className="header-text" to="/dashboard"><h1>Dashboard</h1></Link>
        <br/>
        
        <br/>
        <button className="logout-button" onClick={props.startLogout}>Logout  <i className="fas fa-sign-out-alt"></i></button>
        </div>
        </div>
    </header>
    
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => { dispatch(startLogout())}
})


export default connect(undefined,mapDispatchToProps)(Header) 