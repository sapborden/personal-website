import React from "react"
import { Link } from "gatsby"

export default function ListLink(props) {
    return (
    <li style={{ display: 'inline-block', marginRight: '1rem' }}>
        <Link to={props.to}>{props.children}</Link>
    </li>
    )
}