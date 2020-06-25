import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import firebase from '../firebase'
import { UTCYesterday } from '../day'
import '../css/contestboard.css'

const mapStateToProps = (state) => {
    return({
        uid: state.uid
    })
}

class Contestboard extends Component {

    componentDidMount() {
        this.read()
    }

    read() {
        const uid = this.props.uid

        let db = firebase.firestore()
        let contestDocument = db.collection(UTCYesterday()).doc(uid)
        contestDocument.get().then((doc) => {
            if (doc.exists) {
                this.setState(doc.data())
            } else {
                this.setState({ didNotRegister: true })
            }
        })
    }

    render() {
        const data = this.state
        if (data===null) return (<p>Fetching details</p>)
        else if (data.didNotRegister) return (
            <p>You did not register for this contest.
                <Link to="/register">Register</Link>for next contest now.
            </p>
            )

        const arrayData = []
        for (const stock in data) {
            arrayData.push({
                name: stock,
                weight: data[stock].weight,
                decision: data[stock].decision
            })
        }

        return(
            <div className="table">
                <div className="contestboard-row table-header">
                    <p>Name</p>
                    <p>Weight</p>
                    <p>Decision</p>
                    <p>Change</p>
                </div>
                <ul>
                    {arrayData.map((value, key) =>
                    <div key={key} className="contestboard-row">
                        <p>{value.name}</p>
                        <p>{value.weight}</p>
                        <p>{value.decision ? "LONG" : "SHORT"}</p>
                        <p>0.5</p>
                    </div>)}
                        
                </ul>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Contestboard)