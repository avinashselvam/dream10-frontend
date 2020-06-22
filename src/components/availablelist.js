import React, { Component } from 'react'
import Sli from './sli'

class AvailableList extends Component {

    constructor() {
        super()
        this.state = {}
    }

    

    render() {
        const data = this.props.availableStocks
        return(
            <ul>
                {data.map((stock, key) => <Sli key={key} stockName={stock}/>)}
            </ul>
        )
    }

}

export default AvailableList