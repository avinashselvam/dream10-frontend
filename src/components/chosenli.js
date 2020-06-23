import React , { Component } from 'react'
import Stepper from './stepper'
import Toggle from './toggle'
import '../css/chosenli.css'

class Chosenli extends Component {

    render() {
        const chosenStock = this.props.chosenStock
        return(
            <div className="li-container">
                <p>{chosenStock.name}</p>
                <p>{chosenStock.weight}%</p>
                <Stepper />
                <Toggle />
            </div>
        )
    }
}

export default Chosenli