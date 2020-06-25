import React, { Component } from 'react'
import SearchBar from './searchbar'
import AvailableList from './availablelist'
import ChosenList from './chosenlist'
import { connect } from 'react-redux'
import '../css/register.css'
import { Redirect } from 'react-router-dom'
import firebase from '../firebase'
import { UTCDay, UTCTimeLiesBetween } from '../day'

const mapStateToProps = (state) => {
    return({
        uid: state.uid
    })
}


class Register extends Component {

    constructor() {
        super()
        this.state = { isRegistered: true }
    }

    checkRegistration = async (uid) => {
        let db = firebase.firestore()
        let userDocument = db.collection(UTCDay()).doc(uid)
        let doc = await userDocument.get()
        return doc.exists
    }

    registrationsClosed = () => {
        return !UTCTimeLiesBetween()
    }

    componentDidMount = () => {
        const uid = this.props.uid
        this.checkRegistration(uid).then((isRegistered) => {
            this.setState({ isRegistered })
            console.log(this.state)
        })
    }

    render() {
        const uid = this.props.uid
        const isRegistered = this.state.isRegistered
        const isRegistrationClosed = this.registrationsClosed()
        
        if (uid === null) return <Redirect to="/" />
        if (!isRegistered) {
            if (isRegistrationClosed) return(
                <p>Registrations are open between 930 AM and 430PM EST</p>
            )
            else return(
                <div className="register-container">
                    <div className="left-search">
                        <SearchBar />
                        <AvailableList />
                    </div>
                    <div className="right-chosen">
                        <ChosenList />
                    </div>
                </div>
            )
        } else { return(
            <p>You have already registered for the next contest</p>
        )}
    }

}

export default connect(mapStateToProps)(Register)