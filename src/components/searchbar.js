import React, { Component } from 'react'
import stocks from '../data/stocks'

class SearchBar extends Component {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.availableStocks = this.props.availableStocks
        this.callback = this.props.onSearch
    }

    handleChange(e) {
        const searchPhrase = e.target.value
        const filteredStocks = this.availableStocks
        if (searchPhrase !== "") {
            for (const stock in filteredStocks) {
                if (stock.contains(searchPhrase)) {
                    filteredStocks[stock].visible = true
                }
            }   
        }
        this.callback(filteredStocks)
    }

    render() {
        return(
            <div>
                <p>Available Stocks</p>
                <input type="text" onChange={this.handleChange} placeholder="AAPL" />
            </div>
            
        )
    }

}

export default SearchBar