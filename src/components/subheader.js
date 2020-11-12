import React from "react"
import Tooltip from '@material-ui/core/Tooltip'

export default function Subheader(props) {

    if (props.toolTipText === "na") {    
    return (
        <div style={{ textAlign: 'center' }}>
            <h1 style={{fontSize: '15px', fontStyle: 'italic', }}>{props.subheaderText}</h1>
        </div> 
    );} 
    return (
        <Tooltip title={props.toolTipText}>
            <div style={{ textAlign: 'center' }}>
                <h1 style={{fontSize: '15px', fontStyle: 'italic', }}>{props.subheaderText}</h1>
            </div> 
        </Tooltip>
    )    
}