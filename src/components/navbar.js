import React , { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { logout } from '../actions'
import firebase from '../firebase'
import '../css/navbar.css'

const mapDispatchToProps = (dispatch) => {
    return({
        logout: () => dispatch(logout())
    })
}

const mapStateToProps = (state) => {
    console.log(state, (state.uid !== null))
    return({
        isUserLoggedIn: (state.uid !== null)
    })
}

class Navbar extends Component {

    logout = () => {
        firebase.auth().signOut().then(() => {
            this.props.logout()
            console.log(this.props)
        }).catch((err) => console.log(err))
    }

    redirectToHome = () => {

    }

    render() {
        
        const isUserLoggedIn = this.props.isUserLoggedIn    
        return(
            <div className="navbar-container">
                <Link to="/"> DREAM 10 </Link>
                { isUserLoggedIn ? <Link to="/register"> Register </Link> : null }
                { isUserLoggedIn ? <button className="log-out" onClick={this.logout}>LogOut</button> : null }
            </div>
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)