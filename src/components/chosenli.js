import React , { Component } from 'react'
import { connect } from 'react-redux'
import { toggleDecision } from '../actions'
import Toggle from './toggle'
import Stepper from './stepper'
import '../css/chosenli.css'

const mapDispatchToProps = (dispatch) => {
    return({
        toggleDecision: dispatch(toggleDecision())
    })
}

class Chosenli extends Component {

    toggleDecision = () => this.props.toggleDecision()

    render() {
        const chosenStock = this.props.chosenStock
        return(
            <div className="li-container">
                <p>{chosenStock.name}</p>
                <p>{chosenStock.weight}%</p>
                <Stepper value={chosenStock.name} />
                <Toggle value={chosenStock.name} />
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(Chosenli)