import React from "react"
import Header from "../components/header"
import styles from "./about-css-modules.module.css"

import Container from "../components/container"
import User from "../components/user";

console.log(styles)

export default function About() {
    return (
        <Container>
            <Header headerText="About CSS modules"/>
            <User 
            username="Jane Doe" 
            avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg" 
            excerpt="hi there"/>
            <User 
            username="Bob Smith"
            avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
            excerpt="hows it going"/>
        </Container>
    )
}