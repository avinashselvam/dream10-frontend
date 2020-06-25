import React, { Component } from 'react'
import { connect } from 'react-redux'
import firebase from '../firebase'
import '../css/leaderboard.css'

const mapStateToProps = (state) => {
    return({
        uid: state.uid
    })
}

class Leaderboard extends Component {

    componentDidMount() {
        this.read()
    }

    read() {
        let top10Document = firebase.firestore().collection("leaderboard").doc("top10")
        top10Document.get().then((doc) => {
            if (doc.exists) {
                this.setState({...this.state, top10: doc.data()})
            }
        })

        const uid = this.props.uid
        let userScoreDocument = firebase.firestore().collection("leaderboard").doc(uid)
        userScoreDocument.get().then((doc) => {
            if (doc.exists) {
                this.setState({...this.state, userScore: doc.data()})
            }
        })
    }

    render() {
        if (this.state === null) { return (<div>fetching data</div>) }
        const top10 = this.state.top10
        const userScore = this.state.userScore
        let arrayData = []
        for (var i=1; i<3; i++) {
            arrayData.push(top10[i])
        }
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
                    <p>{key+1}</p>
                    <p>{value.name}</p>
                    <p>{value.score}</p>
                </div>
                })
                }
                {userScore ? <div className="leaderboard-row">
                    <p>{userScore.rank+1}</p>
                    <p>{userScore.name}</p>
                    <p>{userScore.score}</p> 
                </div> : null}
            </ul>
            </div>
        )
    }

}

export default connect(mapStateToProps)(Leaderboard)