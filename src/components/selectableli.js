import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleSelection } from '../actions'

const mapDisptachToProps = (dispatch) => {
    return {
        toggleSelection: x => dispatch(toggleSelection(x))
    }
}

const mapStateToProps = (state, props) => {
    return({
        isChecked: state.selected[props.value]
    })
}

class Selectableli extends Component {

    selectStock = () => this.props.toggleSelection(this.props.value)

    render() {
        const stockname = this.props.value
        console.log(this.props)
        return(
             <p><input type="checkbox" onChange={this.selectStock}/> {stockname}</p>
        )
    }

} 

export default connect(mapStateToProps, mapDisptachToProps)(Selectableli)