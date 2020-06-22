import React, { Component } from 'react'
import Selectableli from './selectableli'

class AvailableList extends Component {

    constructor() {
        super()
        this.didSelectStock = this.didSelectStock.bind(this)

        this.state = {}

    }

    didSelectStock(stock) {
        // calls register's didSelectStock
        this.props.callback(stock)
    }

    

    render() {
        const availableStocks = this.props.availableStocks
        let data = []
        for (const stock in availableStocks) {
            if (availableStocks[stock].visible) { data.push(stock) }
        }
        return(
            <ul>
                {data.map((stock, key) => <Selectableli key={key} stockName={stock} callback={this.didSelectStock}/>)}
            </ul>
        )
    }

}

export default AvailableList