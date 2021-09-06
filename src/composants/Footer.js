import React from "react";

const Footer = (props)=> {
    const date = new Date();
    return(
        <React.Fragment>

        <footer>
            <div className="container">
                <p>{props.siteTitle} - Copyright © {props.auteur} {props.dateCreation} - {date.getFullYear()} </p>
            </div>
        </footer>
    </React.Fragment>
    )
}

export default Footer;