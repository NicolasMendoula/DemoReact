import React from "react";
import FormulaireContact from "./FormulaireContact";

const SectionContact = ({progression, minMax})=>{
    let creditLeft = (-10/9*progression - 100/9);
    creditLeft = minMax(creditLeft,0,100);
    let creditOpa = (1/90)*progression + 10/9;
    creditOpa = minMax(creditOpa,0,1);
    let rightFondForm = 50/93*progression + 350/93;
    rightFondForm = minMax(rightFondForm,-50,0);
    let formWrapperRight =  50/97*progression + 150/97;
    formWrapperRight = minMax(formWrapperRight,-50,0);

    return(
        <React.Fragment>
            <div className="formWrapper flex">
                <div style={{ right:formWrapperRight+'%'}}>
                <h2>Contact</h2>
                <FormulaireContact />
                </div>

            </div>
            
            <div className="fondContact">
                <div className="fondFormulaire" style={{right: rightFondForm+'%'}}>
                    <div className="triangleContactB"></div>

                </div>
                <div className="creditPhoto" style={{ left:creditLeft+'%', opacity: creditOpa}}>
                    <div className="creditWrapper">
                        <h3>Credit photo</h3>
                        <p>L'image de fond a été trouvé sur le site freepik, voici les crédits de l'auteur<br />
                        <a href='https://fr.freepik.com/photos/fond'>Fond photo créé par GarryKillian - fr.freepik.com</a>
                        </p>
                     </div>
                     <div className="triangleFondCredit" ></div>
                </div>

            </div>
        </React.Fragment>
    );

}

export default SectionContact;