import React , { Component } from 'react'
import '../css/toggle.css'

class Toggle extends Component {

    constructor() {
        super()
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange() {
        // this.props.onToggle()
    }

    render() {
        return(
            <input type="checkbox" onChange={this.handleChange}/>
        )
    }

}

export default Toggle   