import React , { Component } from 'react'
import { connect } from 'react-redux'
import Chosenli from './chosenli'
import Tooltip from './tooltip'
import firebase from '../firebase'
import '../css/chosenlist.css'

const matchStateToProps = (state) => {
    return({
        uid: state.uid,
        weights: state.weights,
        decisions: state.decisions,
        message: state.message
    })
}

class ChosenList extends Component {

    write = () => {
        const uid = this.props.uid
        const weights = this.props.weights
        const decisions = this.props.decisions
        
        let data = {}
        for (const stock in weights) {
            data[stock] = {
                weight: weights[stock],
                decision: decisions[stock]
            }
        }

        let db = firebase.firestore()
        let userDocument = db.collection("Thursday").doc(uid)
        userDocument.set(data)
    }

    valid = () => {
        let count = 0
        let totalWeight = 0
        let isAnyWeightZero = false
        const weights = this.props.weights
        for (const stock in weights) {
            count+=1
            if (weights[stock] === 0) {
                isAnyWeightZero = true
                break
            }
            totalWeight += weights[stock]
        }
        // console.log(count, totalWeight, isAnyWeightZero, (3 <= count && count <= 10 && totalWeight === 100 && !isAnyWeightZero))
        return (3 <= count && count <= 10 && totalWeight === 100 && !isAnyWeightZero)
    }
    
    render() {
        const weights = this.props.weights
        const decisions = this.props.decisions
        let chosenStocks = []
        let totalWeight = 0
        for (const stock in weights) {
            totalWeight += weights[stock]
            chosenStocks.push({
                name: stock,
                weight: weights[stock],
                decision: decisions[stock]
            })
        }
        return(
            <div className="chosen-container">
                <div className="chosen-tabletop">
                    <div className="chosen-title">
                        <h1>Selected Stocks</h1>
                        <p>{this.props.message}</p>
                    </div>
                    <div className="register-button-container">
                    <button className="register-button" disabled={!this.valid()} onClick={this.write}>Submit</button>    
                    </div>
                </div>
                
                <div className="table">
                    <div className="chosen-header table-header">
                        <p>Symbol <Tooltip tip="Symbol of the stock" /></p>
                        <p>Weight ({totalWeight}%) <Tooltip tip="Your confidence in the decision" /></p>
                        <p></p>
                        <p>Decision <Tooltip tip="Your prediction of the performance of the stock. LONG if SHORT if" /></p>
                    </div>
                    <ul>
                        {chosenStocks.map((stock, key) => <Chosenli key={key} chosenStock={stock}/>)}
                    </ul>
                </div>

            </div>
        )
    }

}

export default connect(matchStateToProps)(ChosenList)