import React , { Component } from 'react'
import { Redirect } from 'react-router-dom'
import firebase from '../firebase'
import '../css/home.css'

class Home extends Component {

    constructor() {
        super()
        this.signIn = this.signIn.bind(this)
        this.state = {
            isUserLoggedIn: false
        }
    }

    signIn() {
        let provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(provider).then((result) => {
            var user = result.user
            console.log(user.uid)
            this.setState({ isUserLoggedIn: true })
        }).catch((err) => {console.log(err)})
    }

    render() {
        if (this.state.isUserLoggedIn) { return <Redirect to="/contest" /> }
        return(
            <div className="home-container">   
            <button onClick={this.signIn}>Login with google</button>
            </div>
        )
    }

}

export default Home