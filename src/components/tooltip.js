import React from 'react'

const Tooltip = (props) => {
    return(
        <span className="tooltip"> ? <p className="tooltip-text">{props.tip}</p></span>
    )
}

export default Tooltip