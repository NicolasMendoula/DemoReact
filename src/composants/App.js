import React from "react";
import "../styles/general.css";
import Header from "./Header.js";
import Section from "./Section";
import Footer from "./Footer";
import menu from "../data/menu.js"
import siteInfo from "../data/general.js";
import FooterNav from "./FooterNav";
import logo from "../asset/logo.jpg";
import defilementDoux from "./defilementDoux";
import currentSection from "./currentSection";

function App() {
  const closeModal = ()=> document.querySelector('.messageModal').style.display = 'none';

  document.addEventListener('scroll',(e)=>{
    e.stopPropagation();
    currentSection();
  });
  return (
    <React.Fragment >
        <Header />
        {
          menu.map((section,index)=>
          (
            <section id={ (section.title).toLowerCase()} key={section.title+'_'+index}>
              <Section
                toLoad={section.title}
              />
            </section>
          ))
        }
        <FooterNav logo={logo} menu={menu} defilementDoux={defilementDoux}/>
        <Footer siteTitle={siteInfo.siteName}
                dateCreation={siteInfo.anneeCreation}
                auteur={siteInfo.auteur} />
        <div className="messageModal" style ={{display:'none'}}>
          <div>
            <div className="close" onClick={closeModal}>Fermer <i className="fas fa-window-close"></i></div>

            <p>Merci d'avoir participé à cette démo !<br/>
              J'espère qu'elle vous aura convaincu
            </p>
          </div>
        </div>

    </React.Fragment>
  ); 
}

export default App;
