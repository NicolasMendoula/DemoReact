//Formulaire de contact contrôlé !
import contactFields from "../data/contactData";
import { useState } from "react";

const FormulaireContact = () =>{
    //Etat de validité
    const  [isFormValid, setValidation] = useState(false);

    //Contrôle la validité d'un formulaire
    const checkInput = (input)=> {
        let pattern;
        switch(input.type){
            case 'text':
                pattern = /^([a-zA-Z\xC0-\xFF-])+$/gm;
                break;
            case 'email':
                pattern = /^[a-zA-Z0-9]([a-zA-Z0-8](|\.|-|_|\+)([a-zA-Z0-9]))+@[a-zA-Z0-9](([a-zA-Z0-9])+(\.|-|_|\+|))+(\.[a-zA-Z0-9]{1,3})$/gm;
                break;
            default:
                pattern = pattern = /.{1,}/gm;
        }

        //validation des valeurs
        if((pattern).test(input.value)){
            return true;
        }else{
            return false;
        }
    }
    
    // Fonction permettant de compter les champs invalides
    let checkValidity = ()=>{
        let nombreInvalide = 0;
        document.querySelectorAll('.fieldLine input, .fieldLine select, .fieldLine textarea')
        .forEach((input)=>{
            if(!checkInput(input)){
                nombreInvalide++
            };
        });

        if(nombreInvalide === 0){
            setValidation(true);
        }
        else{
            setValidation(false);
        }
    }



    //Fonction permettant de mettre le premier caractère d'une string en majuscule
    const toUCfirst = (string)=> (string.substring(0,1)).toUpperCase() + (string.substring(1)).toLowerCase();
    const defineType = (field)=> {
        if(field.type === 'text' || field.type === 'email'){
            return(<input type={field.type} name={field.name} onChange={checkValidity}/>);
        }
        if(field.type === 'select'){
            return (<select name={field.name} onChange={checkValidity}>
                {field.options.map((option, index) => 
                <option key={index+'-'+option} value={option} >
                    {toUCfirst(option)}
                </option> )}
            </select>)
        }
        if(field.type === 'textarea'){
            return(<textarea name={field.name} onChange={checkValidity}></textarea>)
        }
    }

    const showErrors = (e)=> {
        e.preventDefault();
        e.stopPropagation();
        document.querySelector('.messageModal').style.display = 'initial';
    };

    return(
        <form onSubmit={showErrors}>
        {
            contactFields.map((field,index)=>(
                <div className="fieldLine" key={index+'_'+field.name}>
                    <label htmlFor={field.name}>{ toUCfirst(field.name) }</label>
                    {defineType(field)}
                </div>
            ))
        }
            <div className="submitLine">
                <input id="submit" type="submit" value="Envoyer" 
                    disabled={isFormValid ? false : true}
                />
            </div>
        </form>
    )
}

export default FormulaireContact;