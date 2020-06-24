import React , { Component } from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from '../actions'
import '../css/stepper.css'

const mapDispatchToProps = (dispatch) => {
    return({
        increment: x => dispatch(increment(x)),
        decrement: x => dispatch(decrement(x))
    }) 
}

class Stepper extends Component {

    increment = () => this.props.increment(this.props.value)
    decrement = () => this.props.decrement(this.props.value)

    render() {
        return(
            <div>
            <div className="stepper-container">
            <button
            className="stepper-button"
            onClick={this.increment}>+</button>
            <button
            onClick={this.decrement}
            className="stepper-button">-</button>
            </div>
            </div>
        )
    }

}

export default connect(null, mapDispatchToProps)(Stepper)