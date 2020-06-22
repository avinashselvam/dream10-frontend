import React, { Component } from 'react'
import firebase from '../firebase'

class Leaderboard extends Component {

    // constructor() {
    //     super()
    // }

    componentDidMount() {
        this.read()
    }

    read() {
        let top10Document = firebase.firestore().collection("leaderboard").doc("top10")
        top10Document.get().then((doc) => {
            if (doc.exists) {
                this.setState(doc.data())
            }
        })
    }

    render() {
        const data = this.state
        if (data === null) { return (<div>fetching data</div>) }
        let arrayData = []
        for (var i=1; i<3; i++) {
            arrayData.push(data[i])
        }
        console.log(arrayData)
        return(
            <ul>
                {
                arrayData.map((value, key) => {
                return <li key={key}>{key} {value.name} {value.score}</li>
                })
                }
            </ul>
        )
    }

}

export default Leaderboard