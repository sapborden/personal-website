import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import Subheader from "../components/subheader"

export default function About() {
    return (
        <Layout>
            <Header headerText="ABOUT"/>
            <Subheader 
                subheaderText="I am a recent graduate from the University of St Andrews with a First Class BSc in Mathematics and Philosophy. I work at American Express as a Software Engineer in Brighton."
                toolTipText="na"/>
        </Layout>
    )
}