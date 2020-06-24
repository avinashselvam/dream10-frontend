import React , { Component } from 'react'
import { connect } from 'react-redux'
import { toggleDecision } from '../actions'
import '../css/toggle.css'

const mapDispatchToProps = (dispatch) => {
    return({
        onToggle: x => dispatch(toggleDecision(x))
    })
}

class Toggle extends Component {

    onToggle = () => this.props.onToggle(this.props.value)

    render() {
        return(
            <div>
                <div className="toggle">
                    <label className="toggle-label">
                        <input type="checkbox" class="toggle-checkbox" onChange={this.onToggle}/>
                        <p><span className="long">LONG</span> / <span className="short">SHORT</span></p>
                    </label>
                </div>
            </div>
        )
    }

}

export default connect(null, mapDispatchToProps)(Toggle)  