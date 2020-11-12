import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import Subheader from "../components/subheader"

export default function Games() {
  return ( 
        <Layout>
          <Header headerText="GAMES!"/>
          <Subheader subheaderText="Here are some games"/>
          <ul>
            <li>Computer tries to guess your number</li>
            <li>Try to guess the computer's number</li>
            <li>Play against another user</li>
          </ul>
        </Layout>
  );
}