import React, { Component } from 'react'

class Selectableli extends Component {

    handleChange(e) {
        
    }

    render() {
        const stockname = this.props.stockName
        return(
             <p><input type="checkbox" onChange={this.handleChange}/> {stockname}</p>
        )
    }

}

export default Selectableli