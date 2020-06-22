import React, { Component } from 'react'
import SearchBar from './searchbar'
import AvailableList from './availablelist'
import ChosenList from './chosenlist'
import stocks from '../data/stocks'
import '../css/register.css'

class Stock {

    constructor(name) {
        this.name = name
        this.visible = true
        this.chosen = false
    }

}

function makeAvailableStocks(stocks) {
    let dict = {}
    for (const stock of stocks) {
        dict[stock] = {
            visible: true,
            chosen: false
        }
    } 
    return dict
}


class Register extends Component {

    constructor() {
        super()
        const availableStocks = makeAvailableStocks(stocks)
        this.state = {
            availableStocks: availableStocks,
        }
        console.log(availableStocks)
    }

    didSelectStock(stock) {
        this.setState((prevState) => {
            prevState.availableStocks[stock].chosen = true
            return ({
                availableStocks: prevState.availableStocks
            })
        })
    }

    handleSearch(result) {
        this.setState((prevState) => {
            return ({
                availableStocks: prevState.availableStocks,
                filteredStocks: result,
                chosenStocks: prevState.chosenStocks
            })
        })
    }

    isValidStep(step) {
        return true
    }

    validForm() {

    }

    render() {
        
        return(
            <div className="register-container">
                {/* <div className="left-search">
                    <SearchBar
                    availableStocks={this.state.availableStocks}
                    onSearch={this.handleSearch.bind(this)}/>
                    <AvailableList
                    availableStocks={this.state.availableStocks}
                    onSelect={this.didSelectStock.bind(this)} />
                </div>
                <div className="right-chosen">
                <ChosenList
                chosenStocks={this.state.availableStocks}
                isValidStep={this.isValidStep.bind(this)}/>
                </div> */}
            </div>
        )
    }

}

export default Register