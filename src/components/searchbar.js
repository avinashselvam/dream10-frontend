import React, { Component } from 'react'
import '../css/searchbar.css'

class SearchBar extends Component {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.availableStocks = this.props.availableStocks
        this.callback = this.props.callback
    }

    handleChange(e) {
        const searchPhrase = e.target.value.toUpperCase()
        const filteredStocks = this.availableStocks
        for (const stock in filteredStocks) {
            if (stock.includes(searchPhrase) || searchPhrase === "") {
                filteredStocks[stock].visible = true
            } else { filteredStocks[stock].visible = false }
        }
        this.callback(filteredStocks)
    }

    render() {
        return(
            <div className="searchbar-container">
                <p className="searchbar-title">Available Stocks</p>
                <input className="searchbar-input" type="text" onChange={this.handleChange} placeholder="AAPL" />
            </div>
            
        )
    }

}

export default SearchBar