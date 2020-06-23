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
            <h1>DREAM 10 is a platform to test your market knowledge. Join now to play</h1>
            {/* <h2>This is a platform for you to test your market knowledge and win against competitors </h2> */}
                <button onClick={this.signIn} className="login-google">
                    <div> Sign in with Google </div>
                </button>
            </div>
        )
    }

}

export default Home