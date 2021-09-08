import React from "react";
import SectionAcceuil from "./SectionAccueil";
import SectionContact from "./SectionContact";
import SectionPresentation from "./SectionPresentation";
import { useState } from "react";
import pageProgression from "./progression";

const Section = ({toLoad}) => {
    const [scroll, setScroll] = useState(0);
    
    const minMax = (number, min, max) => {
        if(number < min){
            return min;
        }
        if(number > max){
            return max
        }
        return number;
    }
    /* Page à charger */
    let selectedPage;
    switch(toLoad){
        case 'Accueil':
            selectedPage = <SectionAcceuil progression={scroll} minMax={minMax} />
        break;
        case 'Presentation':
            selectedPage = <SectionPresentation progression={scroll} minMax={minMax}/>
        break;
        case 'Contact':
            selectedPage = <SectionContact progression={scroll} minMax={minMax} />
        break;
        default:
            selectedPage = <p>Non</p>
    }

    //On attends que le DOM soit chargé pour mettre à jour l'Etat
    document.addEventListener('DOMContentLoaded',()=> setScroll(pageProgression(toLoad.toLowerCase()))) 
    document.addEventListener('scroll',()=>{
        setScroll(pageProgression(toLoad.toLowerCase()));
    })

    return (
            <React.Fragment>
                {selectedPage}                
            </React.Fragment>)
}

export default Section;