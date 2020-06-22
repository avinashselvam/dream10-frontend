import React, { Component } from 'react'
import Leaderboard from './leaderboard'
import Contestboard from './contestboard'

class Contest extends Component {


    render() {
        return(
            <div>
                <Contestboard />
                <Leaderboard />
            </div>
        )
    }
}

export default Contest