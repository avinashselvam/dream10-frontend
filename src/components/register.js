import React, { Component } from 'react'
import SearchBar from './searchbar'
import AvailableList from './availablelist'
import ChosenList from './chosenlist'
import { connect } from 'react-redux'
import stocks from '../data/stocks'
import '../css/register.css'
import { Redirect } from 'react-router-dom'

const mapStateToProps = (state) => {
    return({
        isUserLoggedIn: (state.uid !== null)
    })
}


class Register extends Component {

    render() {
        if (!this.props.isUserLoggedIn) return <Redirect to="/" />
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

export default connect(mapStateToProps)(Register)