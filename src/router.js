import React from 'react'
import {Route,Switch} from 'react-router-dom'
import Home from './pages/home'
export default class Router extends React.Component{
    render(){
        return (
            <React.Fragment>
                <Switch>
                    <Route path="/" exact component={Home}/>
                </Switch>                
            </React.Fragment>
        )
    }
}