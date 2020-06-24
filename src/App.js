import React, { Component } from 'react'
import Navbar from './components/navbar'
import { Switch, Route } from 'react-router-dom'
import Register from './components/register'
import Home from './components/home'
import Contest from './components/contest'
import { connect } from 'react-redux'
import './css/app.css'

const mapStateToProps = (state) => {
    return({
        isUserLoggedIn: (state.uid !== null)
    })
}


class App extends Component {

    render() {
        const isUserLoggedIn = this.props.isUserLoggedIn
        return (
            <div className="whole">
                <div className="navbar"> <Navbar/> </div>
                <div className="page">
                    <Switch>
                    <Route path="/" exact component={ isUserLoggedIn ? Contest : Home }></Route>
                    <Route path="/register" component={ isUserLoggedIn ? Register : Home }></Route>
                    {/* <Route path="/contest" component={Contest}></Route> */}
                    </Switch>
                </div>
            </div>
            )
    }

}

export default connect(mapStateToProps)(App)
