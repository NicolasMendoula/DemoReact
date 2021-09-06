import React from "react";
import defilementDoux from "./Functions";

const SectionAcceuil = ()=>{
    return(
        <React.Fragment>
        <div className="container">
            <div className="innerIntro flex">
                <div className="introduction">
                    <h2>Bievenue sur la&nbsp;démo&nbsp;technique Réact&nbsp;!</h2>
                    <p> Voici un mini site One page que j'ai réalisé hier soir pour cet entretien,
                        j'espère qu'il vous plaira. Vous y trouverez une petite description technique
                        ainsi qu'un formulaire de contact.</p>
                    <button><a href="#presentation" onClick={defilementDoux}>Voir les spécificité technique</a></button>
                </div>
            </div>
        </div>
        <div className="triangle"></div>
        <div className="fondBlanc"></div>
        </React.Fragment>

        )
}
export default SectionAcceuil;