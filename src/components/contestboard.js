import React, { Component } from 'react'
import firebase from '../firebase'
import '../css/contestboard.css'

class Contestboard extends Component {

    // constructor() {
    //     super()
    // }

    componentDidMount() {
        this.read()
    }

    read() {
        let db = firebase.firestore()
        // let uid = firebase.auth().currentUser.uid

        let contestDocument = db.collection("Friday").doc("8pDfN3bV06hDgbWavbkCyzNyhzD3")
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
        else if (data.didNotRegister) return (<p>Did not register for contest on {}</p>)

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

export default Contestboard