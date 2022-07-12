import React from "react";
import { createGlobalStyle } from "styled-components";

import SectionNavegation from "./components/SectionNav/index"
import SectionAbout from "./components/SectionAbout/index"
import SectionFormation from "./components/SectionFormation/index"
import SectionTeam from "./components/SectionTeam/index"
import SectionEvents from "./components/SectionEvents/index"
import Footer from "./components/Footer/index"

const GlobalStyle=createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }
  ::-webkit-scrollbar{
    width:5px;
  }
  ::-webkit-scrollbar-track{
    background-color:transparent;
  }
  ::-webkit-scrollbar-thumb{
    width:2px;
    background-color:#00145D;
    border-radius: 20px;
  }
`
export default function App(){
  return(
    <>
      <GlobalStyle/>
      <SectionNavegation/>
      <SectionAbout/>
      <SectionFormation/>
      <SectionTeam/>
      <SectionEvents/>
      <Footer/>
    </>
  )
}
