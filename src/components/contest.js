import React, { Component } from 'react'
import Leaderboard from './leaderboard'
import Contestboard from './contestboard'
import '../css/contest.css'

class Contest extends Component {

    render() {
        return(
            <div className="contest-container">
                <div className="contestboard">
                    <h1>Your Stocks</h1>
                    <Contestboard />
                </div>
                <div className="leaderboard">
                    <h1>Leaderboard</h1>
                    <Leaderboard />
                </div>
            </div>
        )
    }
}

export default Contest