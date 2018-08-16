import React from 'react';
import {Router,Route,Switch,Link,NavLink} from "react-router-dom";
import Dashboard from "../components/Dashboard"
import Create from "../components/Create"
import EditPage from "../components/EditPage"

import NotFound from "../components/NotFound"
import Login from "../components/Login"
import createHistory from "history/createBrowserHistory"
import PrivateRoute from "./PrivateRoute"
import PublicRoute from "./PublicRoute"

export const history = createHistory()


const AppRouter = () => (
    <Router history={history}>
    <div>
        
        <Switch>
            <PublicRoute path="/" component={Login} exact={true} />
            <PrivateRoute path="/dashboard" component={Dashboard}/>
            <PrivateRoute path="/create" component={Create}/>
            <PrivateRoute path="/edit/:id" component={EditPage}/>           
            <Route component={NotFound}/>
    </Switch>
    </div>

    


</Router>

)
export default AppRouter
