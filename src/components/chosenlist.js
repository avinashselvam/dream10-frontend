import React , { Component } from 'react'
import { connect } from 'react-redux'
import Chosenli from './chosenli'
import firebase from '../firebase'
import '../css/chosenlist.css'

const matchStateToProps = (state) => {
    return({
        weights: state.weights,
        decisions: state.decisions
    })
}

class ChosenList extends Component {

    write() {
        let db = firebase.firestore()
        let userDocument = db.collection("Thursday").doc("awdawdawdw")
    }
    
    render() {
        const weights = this.props.weights
        const decisions = this.props.decisions
        let chosenStocks = []
        for (const stock in weights) {
            chosenStocks.push({
                name: stock,
                weight: weights[stock],
                decision: decisions[stock]
            })
        }
        return(
            <div className="chosen-container">
                <h1>Selected Stocks</h1>
                <div className="table">
                    <div className="chosen-header table-header">
                        <p>Symbol</p>
                        <p>Weight</p>
                        <p></p>
                        <p>Long/Short</p>
                    </div>
                    <ul>
                        {chosenStocks.map((stock, key) => <Chosenli key={key} chosenStock={stock}/>)}
                    </ul>
                </div>
                <div className="register-button-container">
                    <button className="register-button" disabled={false} onClick={this.write}>Register</button>
                    {(true ? <p>No stocks selected yet</p> : null)}
                    </div>
            </div>
        )
    }

}

export default connect(matchStateToProps)(ChosenList)