import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import Subheader from "../components/subheader";

export default function Home() {
  return ( 
        <Layout>
          <Header headerText="STEF BORDEN"/>
          <Subheader subheaderText="“There ain't no sin and there ain't no virtue. There's just stuff people do.”"/>
          <img src="https://source.unsplash.com/random/400x200" alt="" />
        </Layout>
  );
}