import React , { Component } from 'react'
import { Link } from 'react-router-dom'
import firebase from '../firebase'
import '../css/navbar.css'

class Navbar extends Component {

    constructor() {
        super()
        this.state = {
            isUserLoggedIn: firebase.auth().currentUser !== null
        }
        this.logOut = this.logOut.bind(this)
    }

    logOut() {
        firebase.auth().signOut().then(() => {
            this.setState({
                isUserLoggedIn: false
            })
            console.log("logged out")
        }).catch((err) => console.log(err))
    }

    render() {
        const isUserLoggedIn = this.state.isUserLoggedIn
        return(
            <div className="navbar-container">
                <Link to="/"> DREAM 10 </Link>
                <Link to="/register"> Register </Link>
                { true ? <button className="log-out" onClick={this.logOut}>LogOut</button> : null }
            </div>
        )
    }

}

export default Navbar