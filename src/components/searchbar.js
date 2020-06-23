import React, { Component } from 'react'
import { connect } from 'react-redux'

import '../css/searchbar.css'

const mapDispatchToProps = (dispatch) => {
    return({
        onSearch: 1
    })
}

class SearchBar extends Component {

    onSearch = (e) => {
        const searchPhrase = e.target.value.toUpperCase()
        return this.props.onSearch(e)
    }

    render() {
        return(
            <div className="searchbar-container">
                <input className="searchbar-input" type="text" placeholder="Search" />
                <p className="searchbar-title">Available Stocks</p>
            </div>
            
        )
    }

}

export default SearchBar