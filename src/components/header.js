import React from "react"

export default function Header(props) {
    return (
    <div style={{ textAlign: 'center'}}>
        <h1>{props.headerText}</h1>
    </div>  
    )    
}