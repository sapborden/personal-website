import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import Subheader from "../components/subheader"
import Card from "../components/card"

export default function Diaries() {
    return (
        <Layout>
            <Header headerText="DIARIES"/>
            <Subheader subheaderText="“The world must be all fucked up...when men travel first class and literature goes as freight.”"/>
            <Card cardTitle="One Hundered Years of Solitude" cardImg="../../static/remedios.jpg"/>
            <Card cardTitle="Love in the Time of Cholera"/>
            <Card cardTitle="A Suitable Boy"/>
        </Layout>
    )
}
