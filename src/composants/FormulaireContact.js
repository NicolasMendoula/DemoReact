//Formulaire de contact contrôlé !
import contactFields from "../data/contactData";
import { useState } from "react";

const FormulaireContact = () =>{

    const  [isFormValid, validation] = useState(false);
    let checkText = (e)=>{
        let pattern = /([a-zA-Z \u00C0-\u017F]|-)+/gm;
        console.log(e);
        if(pattern.test((e.target.value)) && e.target.value !== '') {
            console.log("L'entrée "+(e.target.value) +" est valide");
            e.target.style.borderColor = '#eee';
            validation(true);
        }else{
            console.log("L'entrée "+(e.target.value) +" n'est pas valide");
            e.target.style.borderColor = 'red';
            validation(false);
        }

    }
    const toUCfirst = (string)=> (string.substring(0,1)).toUpperCase() + (string.substring(1)).toLowerCase();
    const defineType = (field)=> {
        if(field.type === 'text' || field.type === 'mail'){
            return(<input type={field.type} name={field.name} onChange={checkText}/>);
        }
        if(field.type === 'select'){
            return (<select name={field.name}>
                {field.options.map((option, index) => 
                <option key={index+'-'+option} value={option} >
                    {toUCfirst(option)}
                </option> )}
            </select>)
        }
        if(field.type === 'textarea'){
            return(<textarea name={field.name}></textarea>)
        }
    }

    return(
        <form>
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