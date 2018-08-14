import React from 'react';
import {BrowserRouter,Route,Switch,Link,NavLink} from "react-router-dom";
const Header = () => (
    <header>
        <h1>FitTrackify!</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
        <br/>
        <NavLink to="/create" activeClassName="is-active">Create</NavLink>
        <br/>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </header>
);

export default Header 