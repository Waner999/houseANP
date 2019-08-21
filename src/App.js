import React, { Component } from 'react'
import { HashRouter , Switch , Route } from 'react-router-dom'
import Main from  './pages/main/Main'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Error from './Error404'
import Map from './pages/maps/Map'
import Citys from './pages/citys/Citys' 

export default class App extends Component {
    render() {
        return (
             <HashRouter>

                <Switch>

                <Route path='/' exact  component = {Main} />
                <Route path='/login'   component = {Login} />
                <Route path='/register' component = {Register} />
                <Route path='/maps' component = {Map} />
                <Route path='/Citys' component = {Citys} />
                <Route component = {Error} />

                </Switch>

             </HashRouter>
        )
    }
}
