import React , { Component } from 'react'
import Chosenli from './chosenli'
import firebase from '../firebase'
import '../css/chosenlist.css'

class ChosenList extends Component {

    constructor(props) {
        super(props)
        this.validForm = this.validForm.bind(this)
        this.write = this.write.bind(this)

        const availableStocks = this.props.availableStocks
        let chosenStocks = []
        for (const stock in availableStocks) {
            
        }
        this.state =  chosenStocks.map((stock) => {
            return ({
                name: stock,
                weight: 0,
                decision: false
            })
        })
    }

    validForm() {
        return true
    }

    write() {
        let db = firebase.firestore()
        let userDocument = db.collection("Thursday").doc("awdawdawdw")
        userDocument.set(this.state)
    }
    

    render() {
        const stocks = this.props.chosenStocks
        return(
            <div>
            <div className="chosen-header">
                <p>Symbol</p> <p>weight</p> <p></p> <p>long/short</p>
            </div>
            <ul>
                {stocks.map((value, key) => {
                    return <Chosenli key={key} stockName={value} callback={this.validForm} />
                })}
            </ul>
            <button class="register-button" disabled={this.validForm()} onClick={this.write}>Register</button>
            </div>
        )
    }

}

export default ChosenList