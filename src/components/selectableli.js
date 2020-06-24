import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleSelection } from '../actions'
import '../css/selectableli.css'

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
        return(
             <label className="selectable-row">
                 <input className="selectable-checkbox" type="checkbox" checked={this.props.isChecked} onChange={this.selectStock}/>
                 <p>{stockname}</p>
            </label>
        )
    }

} 

export default connect(mapStateToProps, mapDisptachToProps)(Selectableli)