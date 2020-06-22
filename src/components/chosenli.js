import React , { Component } from 'react'
import Stepper from './stepper'
import Toggle from './toggle'
import '../css/chosenli.css'

class Chosenli extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: this.props.stockName,
            percent: 0,
            decision: true
        }
    }

    handleToggle() {
        this.setState((prevState) => {
            return {
                name: this.props.stockName,
                percent: 0,
                decision: !prevState.decision
            }
        })
    }

    handleStepper(e) {
        this.setState((prevState) => {
            const prevPercent = prevState.percent
            return {
                name: this.props.stockName,
                percent: prevPercent + (e ? 5 : -5), 
                decision: !prevState.decision
            }
        })
    }

    render() {
        const stock = this.state

        

        return(
            <div className="li-container">
                <p>{stock.name}</p>
                <p>{stock.percent}%</p>
                <Stepper />
                <Toggle />
            </div>
        )
    }
}

export default Chosenli