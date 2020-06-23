import React, { Component } from 'react'
import Selectableli from './selectableli'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return ({
        availableStocks: state.visible
    })
}

class AvailableList extends Component {

    render() {
        let visibleStocks = []
        const availableStocks = this.props.availableStocks
        for (const stock in availableStocks) {
            if (availableStocks[stock]) visibleStocks.push(stock)
        }
        return(
            <ul>
                {visibleStocks.map((stock, key) => {
                    return (<Selectableli key={key} value={stock} />)
                })}
            </ul>
        )
    }

}

export default connect(mapStateToProps)(AvailableList)