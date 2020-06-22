import React, { Component } from 'react'
import Navbar from './components/navbar'
import { Switch, Route } from 'react-router-dom'
import Register from './components/register'
import Home from './components/home'
import Contest from './components/contestboard'
import firebase from './firebase'
import './css/app.css'

class App extends Component {

  constructor() {
      super()
      this.state = {
          isUserLoggedIn: firebase.auth().currentUser !== null
      }
  }

  render() {
      const isUserLoggedIn = this.state.isUserLoggedIn
    return (
        <div>
            <Navbar/>
            <Switch>
            <Route path="/" exact component={ isUserLoggedIn ? Contest : Home }></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/contest" component={Contest}></Route>
            </Switch>
        </div>
        )
    }

}

export default App
