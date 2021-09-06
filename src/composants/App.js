import React from "react";
import "../styles/general.css";
import Header from "./Header.js";
import Section from "./Section";
import Footer from "./Footer";
import menu from "../data/menu.js"
import siteInfo from "../data/general.js";

function App() {
  return (
    <React.Fragment>
      <Header />
      {
        menu.map((section,index)=>
        (
          <section id={ (section.title).toLowerCase()} key={section.title+'_'+index}>
            <Section toLoad={section.title} />
          </section>
        ))
      }
      <Footer siteTitle={siteInfo.siteName}
              dateCreation={siteInfo.anneeCreation}
              auteur={siteInfo.auteur} />

    </React.Fragment>
  ); 
}

export default App;
