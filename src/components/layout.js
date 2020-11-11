import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
    <li style={{ display: 'inline-block', marginRight: '1rem' }}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

export default function Layout({children}) {
    return (
        <div style={{ margin: '3rem auto', maxWidth: 900, padding: '0 1rem'}}>
            <header style={{ marginBottom: '1.5rem' }}>
                <Link to="/" style={{ textShadow: 'none', backgroundImage: 'none' }}>
                    <h3 style={{ display: 'inline', fontSize: '15px', color: 'teal'}}>2020</h3>
                </Link>
                <ul style={{ listStyle: 'none', float: 'right' }}>
                    <ListLink to="/">HOME</ListLink>
                    <ListLink to="/about/">ABOUT</ListLink>
                    <ListLink to="/diaries/">DIARIES</ListLink>
                    <ListLink to="/games/">GAMES</ListLink>
                </ul>
            </header>
            {children}
        </div>
    )
}