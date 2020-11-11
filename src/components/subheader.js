import React from "react"

export default function Subheader(props) {
    return (
    <div style={{ textAlign: 'center' }}>
        <h1 style={{fontSize: '15px', fontStyle: 'italic', }}>{props.subheaderText}</h1>
    </div>  
    )    
}