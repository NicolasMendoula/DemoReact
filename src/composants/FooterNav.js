/* Contient la barre de navigation du footer */

const FooterNav = ({logo,menu,defilementDoux}) => {
    return(
        <nav className="footerNav" id="footerNav">
            <div className="container">
                <div className="flex">
                    <div className="footerLogo">
                        <img src={logo} alt="Démo" />
                        <p>Demo React</p>
                    </div>
                    <div className="footerMenu">
                        <h3>Navigation</h3>
                        <ul>
                            {menu.map((item,index)=>(<li key={item.title+'_'+index}><a href={item.target} onClick={defilementDoux}>{item.title}</a></li>)) }
                        </ul>
                    </div>
                    <div>
                        <h3>D'autres exemples ici</h3>
                        <ul>
                            <li><a href="https://infinity.mendoula.com/">Un site immobilier</a></li>
                            <li><a href="https://mendoula.com/">Un site Portfolio en cours</a></li>
                            <li><a href="https://github.com/NicolasMendoula/DemoReact.git">Le code source pour cete page</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default FooterNav;