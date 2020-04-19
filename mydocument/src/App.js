import React, { Component  , Fragment} from 'react'
import {
    Route,
    Switch,
} from 'react-router-dom'
import NavLinks from './components/navLinks'
import Router from './router'
export default class App extends Component {
    componentDidMount(){
        console.log('Called componentDidMount')
    }
    componentDidUpdate(){
        console.log('Called componentDidUpdate')
    }
    render() {
        console.log('Called Render')
        return (
            <Fragment>
                <NavLinks />
                <Switch>

                    <Router />
                    
                </Switch>
            </Fragment>
        )
    }
}
