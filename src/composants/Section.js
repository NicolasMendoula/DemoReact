import React from "react";
import SectionAcceuil from "./SectionAccueil";
import SectionContact from "./SectionContact";
import SectionPresentation from "./SectionPresentation";

const Section = (props) => {
    /* Page à charger */
    const toLoad = props.toLoad;
    let selectedPage;
    switch(toLoad){
        case 'Accueil':
            selectedPage = <SectionAcceuil />
        break;
        case 'Presentation':
            selectedPage = <SectionPresentation />
        break;
        case 'Contact':
            selectedPage = <SectionContact />
        break;
        default:
            selectedPage = <p>Non</p>
    }

    return (
            <React.Fragment>
                {selectedPage}
            </React.Fragment>)
}

export default Section;