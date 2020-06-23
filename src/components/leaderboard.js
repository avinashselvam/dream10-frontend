import React, { Component } from 'react'
import firebase from '../firebase'
import '../css/leaderboard.css'

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
            <div className="table">
            <div className="leaderboard-row table-header">
                <p>Rank</p>
                <p>Name</p>
                <p>Score</p>
            </div>
            <ul>
                {
                arrayData.map((value, key) => {
                return <div key={key} className="leaderboard-row">
                    <p>{key}</p>
                    <p>{value.name}</p>
                    <p>{value.score}</p>
                </div>
                })
                }
            </ul>
            </div>
        )
    }

}

export default Leaderboard