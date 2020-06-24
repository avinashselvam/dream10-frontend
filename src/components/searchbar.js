import React, { Component } from 'react'
import { toggleVisibility } from '../actions'
import { connect } from 'react-redux'

import '../css/searchbar.css'

const mapDispatchToProps = (dispatch) => {
    return({
        onSearch: x => dispatch(toggleVisibility(x))
    })
}

class SearchBar extends Component {

    onSearch = (e) => {
        const searchPhrase = e.target.value.toUpperCase()
        this.props.onSearch(searchPhrase)
    }

    render() {
        return(
            <div className="searchbar-container">
                <input className="searchbar-input" type="text" placeholder="Search" onChange={this.onSearch}/>
                <p className="searchbar-title">Available Stocks</p>
            </div>
            
        )
    }

}

export default connect(null, mapDispatchToProps)(SearchBar)