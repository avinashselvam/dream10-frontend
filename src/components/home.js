import React , { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../actions'
import firebase from '../firebase'
import '../css/home.css'

const mapStateToProps = (state) => {
    return({
        isUserLoggedIn: (state.uid !== null)
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        login: (x) => dispatch(login(x))
    })
}

class Home extends Component {

    constructor() {
        super()
        // this.signIn = this.signIn.bind(this)
    }

    signIn = () => {
        let provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(provider).then((result) => {
            var user = result.user
            this.props.login(user.uid)
        }).catch((err) => {console.log(err)})
    }

    render() {
        if (this.props.isUserLoggedIn) { return <Redirect to="/contest" /> }
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)