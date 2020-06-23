import React, { Component } from 'react'
import SearchBar from './searchbar'
import AvailableList from './availablelist'
import ChosenList from './chosenlist'
import stocks from '../data/stocks'
import '../css/register.css'

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

    }

    render() {
        
        return(
            <div className="register-container">
                <div className="left-search">
                    <SearchBar />
                    <AvailableList />
                </div>
                <div className="right-chosen">
                    <ChosenList />
                </div>
            </div>
        )
    }

}

export default Register