import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import Subheader from "../components/subheader"
import SingleCard from "../components/singlecard"
import {
    Catch, Cholera, Remedios, Suitable, Tiger, Wrath
} from '../../static/export/diaries'

export default function Diaries() {
    return (
        <Layout>
            <Header headerText="DIARIES"/>
            <Subheader 
                subheaderText="“The world must be all fucked up...when men travel first class and literature goes as freight.”"
                toolTipText="One Hundered Years of Solitude - Gabriel Garcia Marquez (1967)"/>
            <SingleCard 
                cardTitle="One Hundered Years of Solitude" 
                author="Gabriel Garcia Marquez" 
                cardImg={Remedios}/>
            <SingleCard 
                cardTitle="Love in the Time of Cholera" 
                author="Gabriel Garcia Marquez"
                cardImg={Cholera}/>
            <SingleCard 
                cardTitle="A Suitable Boy" 
                author="Vikram Seth"
                cardImg={Suitable}/>
            <SingleCard 
                cardTitle="The Grapes of Wrath" 
                author="John Steinbeck"
                cardImg={Wrath}/>
            <SingleCard 
                cardTitle="Catch 22" 
                author="Joseph Heller"
                cardImg={Catch}/>
            <SingleCard 
                cardTitle="The White Tiger" 
                author="Aravind Adiga"
                cardImg={Tiger}/>
        </Layout>
    )
}
