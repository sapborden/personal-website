import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import Subheader from "../components/subheader";
import {
  Mosque, Flats
} from '../../static/export/index'


export default function Home() {
  return ( 
        <Layout>
          <Header headerText="STEF BORDEN"/>
          <Subheader 
            subheaderText="“There ain't no sin and there ain't no virtue. There's just stuff people do.”"
            toolTipText="The Grapes of Wrath - John Steinbeck (1939)"/>
          <img src={Mosque} alt="" />
          <img src={Flats} alt=""/>
        </Layout>
  );
}