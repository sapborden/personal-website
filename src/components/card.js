import React from "react"

export default function Card(props) {
    return (
        <div styles={{ margin: '3rem auto', maxWidth: '200px' }}>
            <p>{props.cardTitle}</p>
            <img src={props.cardImg} alt=""/>
        </div>
    )

}