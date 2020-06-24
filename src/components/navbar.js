import React , { Component } from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../actions'
import firebase from '../firebase'
import '../css/navbar.css'

const mapDispatchToProps = (dispatch) => {
    return({
        logout: dispatch(logout())
    })
}

const mapStateToProps = (state) => {
    return({
        isUserLoggedIn: (state.uid !== null)
    })
}

class Navbar extends Component {

    logout = () => {
        firebase.auth().signOut().then(() => {
            this.props.logout()
            this.props.history.push("/")
        }).catch((err) => console.log(err))
    }

    render() {
        const isUserLoggedIn = this.props.isUserLoggedIn
        return(
            <div className="navbar-container">
                <Link to="/"> DREAM 10 </Link>
                <Link to="/register"> Register </Link>
                { isUserLoggedIn ? <button className="log-out" onClick={this.logout}>LogOut</button> : null }
            </div>
        )
    }

}

export default Navbar