import React, { Component } from 'react'
import firebase from '../firebase'

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

        let contestDocument = db.collection("Thursday").doc("8pDfN3bV06hDgbWavbkCyzNyhzD3")
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
        else if (data.didNotRegister) return (<p>Did not register</p>)

        const arrayData = []
        for (const stock in data) {
            arrayData.push({
                name: stock,
                weight: data[stock].weight,
                decision: data[stock].decision
            })
        }
        console.log(arrayData)
        return(
            <ul>
                {arrayData.map((value, key) => <li key={key}>{value.name} {value.weight} {value.decision}</li>)}
            </ul>
        )
    }
}

export default Contestboard