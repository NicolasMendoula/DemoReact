/* Section présentation */

import React from "react";


const SectionPresentation = ()=> (
    <React.Fragment>
    <div className="container">
        <div className="flex">
            <div className="specs">
            <h2>Spécificités techniques</h2>
                <p>Cette page a été réalisée grâce à la Bibliothèque Node.js</p>
                <p>Elle utilise les dépendances Create React App, qui m'a permis de générer cette page rapidement</p>
                <p>Cette dépendance associe React, ReactDOM, aisni que Webpack</p>
                <p>Les technologies associées sont bien évidemment JS, j'ai développé une petite fonction permettant le défilement doux.</p>
                <p>La plupart des fonctions sont écrites en JS natif.</p>
                <p>Le site n'est pas encore responsive, il y a encore des bug.</p>
            </div>
            <div className="techWrap">
                <ul className="listeTech">
                    <li><i className="fab fa-html5"></i><p>HTML</p></li>
                    <li><i className="fab fa-css3-alt"></i><p>CSS</p></li>
                    <li><i className="fab fa-js"></i><p>Javascript</p></li>
                    <li><i className="fab fa-react"></i><p>ReactJS</p></li>
                </ul>
            </div>
        </div>   

    </div>
    <div className="fondSpecs"></div>
    <div className="triangleSpecsA"></div>
    <div className="triangleSpecsB"></div>
    </React.Fragment>  );

export default SectionPresentation;