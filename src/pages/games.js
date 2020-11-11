import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import Subheader from "../components/subheader"

export default function Games() {
  return ( 
        <Layout>
          <Header headerText="GAMES!"/>
          <Subheader subheaderText="Here are some game"/>
        </Layout>
  );
}