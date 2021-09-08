/* Section présentation */

import React from "react";


const SectionPresentation = ({progression})=> {
    let leftFond;
    let leftTecho;
    let leftSpecs;
    if(progression < 25){
        leftSpecs = progression < 0 ? progression : 0;
    }
    if(progression > 25){
        leftSpecs = -20/9*progression + 500/9;
    }
    if(progression < 20){
        leftFond = (20/19*progression + 100/19) < 0 ? (20/19*progression + 100/19) : 0;
    }
    if(progression > 20){
        leftFond = progression > 20 ? -2*progression + 40 : 0;
    }
    if(progression < 10){
        leftTecho = (5/4*progression + 25) < 0 ? (5/4*progression + 25) : 0;
    }
    if(progression > 10){
        leftTecho = progression > 10 ? -5/2*progression +25 : 0;
    }




    let htmlScale = ((1/85)*progression + 20/17) > 0 ? ((1/85)*progression + 20/17) : 0;
    htmlScale = htmlScale < 1 ? htmlScale : 1;
    let cssScale =  ((1/90)*progression + 10/9) > 0 ? ((1/90)*progression + 10/9) : 0;
    cssScale = cssScale < 1 ? cssScale : 1;
    let jsScale =  ((1/95)*progression + 20/19) > 0 ? ((1/90)*progression + 20/19) : 0;
    jsScale = jsScale < 1 ? jsScale : 1;
    let reactScale =  ((1/100)*progression + 1) > 0 ? ((1/100)*progression + 1) : 0;
    reactScale = reactScale < 1 ? reactScale : 1;

    return(
    <React.Fragment>
    <div className="container">
        <div className="flex">
            <div className="specs" style={{left:leftSpecs+'%'}}>
            <h2>Spécificités techniques</h2>
                <p>Cette page a été réalisée grâce à la Bibliothèque Node.js</p>
                <p>Elle utilise les dépendances Create React App, qui m'a permis de générer cette page rapidement</p>
                <p>Cette dépendance associe React, ReactDOM, aisni que Webpack</p>
                <p>Les technologies associées sont bien évidemment JS, j'ai développé une petite fonction permettant le défilement doux.</p>
                <p>La plupart des fonctions sont écrites en JS natif.</p>
                <p>Le site n'est pas encore responsive, il y a encore des bug.</p>
            </div>
            <div className="techWrap" style={{left: leftTecho+'%'}}>
                <ul className="listeTech">
                    <li style={{ transform :'scale('+htmlScale+')', opacity: htmlScale}}><i className="fab fa-html5"></i><p>HTML</p></li>
                    <li style={{ transform : 'scale('+cssScale+')', opacity: cssScale }}><i className="fab fa-css3-alt"></i><p>CSS</p></li>
                    <li style={{ transform : 'scale('+jsScale+')', opacity: jsScale }} ><i className="fab fa-js"></i><p>Javascript</p></li>
                    <li style={{ transform : 'scale('+reactScale+')', opacity: reactScale }} ><i className="fab fa-react"></i><p>ReactJS</p></li>
                </ul>
            </div>
        </div>   

    </div>
    <div className="fondWrap" style={{left:leftFond+'%' }}>
        <div className="fondSpecs"></div>
        <div className="triangleSpecsA"></div>
        <div className="triangleSpecsB"></div>
        <div className="triangleContactA" style={{left:null}}></div>
    </div>
    </React.Fragment>  );
}

export default SectionPresentation;