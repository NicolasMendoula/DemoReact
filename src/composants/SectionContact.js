import React from "react";
import logo from "../asset/logo.jpg";
import menu from "../data/menu";
import defilementDoux from "./Functions";

const SectionContact = ()=>{
    return(
        <React.Fragment>
        <div className="container">
            <h2>Contact</h2>
            <p>Il était sensé avoir un formulaire ici mais je n'ai pas eu le temps de le faire !</p>
            <h3>Credit photo</h3>
            <div>
            <a href='https://fr.freepik.com/photos/fond'>Fond photo créé par GarryKillian - fr.freepik.com</a>
        </div>
        </div>
    <nav>
        <div className="container">
        <div className="flex">
            <div className="footerLogo">
                <img src={logo} alt="Démo" />
                <p>Demo React</p>
            </div>
            <div className="footerMenu">
                <h3>Navigation</h3>
                <ul>
                    {menu.map((item,index)=>(<li key={item.title+'_'+index}><a href={item.target} onClick={defilementDoux}>{item.title}</a></li>)) }
                </ul>
            </div>
            <div>
                <h3>D'autres exemples ici</h3>
                <ul>
                    <li><a href="https://infinity.mendoula.com/">Un site immobilier</a></li>
                    <li><a href="https://mendoula.com/">Un site Portfolio en cours</a></li>
                    <li><a href="https://github.com/NicolasMendoula/DemoReact.git">Le code source pour cete page</a></li>
                </ul>
            </div>
        </div>
        </div>
    </nav>

    </React.Fragment>
    );

}

export default SectionContact;