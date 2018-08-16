import React from 'react';
import {BrowserRouter,Route,Switch,Link,NavLink} from "react-router-dom";
import {connect} from "react-redux"
import {startLogout} from "../actions/auth"
const Header = (props) => (
    <header>
        <h1>FitTrackify!</h1>
        <NavLink to="/dashboard" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <br/>
        <NavLink to="/create" activeClassName="is-active">Create</NavLink>
        <br/>
        <button onClick={props.startLogout}>Log out</button>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => { dispatch(startLogout())}
})


export default connect(undefined,mapDispatchToProps)(Header) 