import React from "react";
import defilementDoux from "./defilementDoux";


const SectionAcceuil = ({progression})=>{
    const fontWrapProgress = (20/17)*progression;
    const fontH2 = (20/3)*progression;
    const H2Opacity = (-1/15)*progression +1;
    const pLeft = (10/3)*progression;
    const pOpacity = (-1/30)*progression + 1;
    const buttonLeft = (27/7)*progression;
    const buttonOpacity = (-1/35)*progression + 1;
            return(
            <React.Fragment>
    
            <div className="container">
                <div className="innerIntro flex">
                    <div className="introduction">
                        <h2 style={{left: fontH2+'%', opacity:H2Opacity }} >Bienvenue sur la&nbsp;démo&nbsp;technique Réact&nbsp;!</h2>
                        <p style={{left: pLeft+'%', opacity: pOpacity }}> Voici un mini site One page que j'ai réalisé hier soir pour cet entretien,
                            j'espère qu'il vous plaira. Vous y trouverez une petite description technique
                            ainsi qu'un formulaire de contact.</p>
                        <button style={{ left:buttonLeft+'%', opacity:buttonOpacity}}><a href="#presentation" onClick={defilementDoux}>Voir les spécificité technique</a></button>
                    </div>
                </div>
            </div>
            <div className="fondWrap" style={{left: fontWrapProgress+'%' }}>
                <div className="triangle"></div>
                <div className="fondBlanc"></div>
            </div>
            </React.Fragment>
            )

}
export default SectionAcceuil;