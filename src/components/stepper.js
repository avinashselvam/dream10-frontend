import React , { Component } from 'react'

class Stepper extends Component {

    constructor() {
        super()
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        // this.props.onStep(e)
    }

    render() {
        return(
            <div className="stepper-container">
            <button
            className="stepper-button"
            onClick={this.handleChange(false)}>-</button>
            <button
            onClick={this.handleChange(true)}
            className="stepper-button">+</button>
            </div>
        )
    }

}

export default Stepper