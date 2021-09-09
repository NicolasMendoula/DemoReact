import Menu from "./Menu.js";
import menuItem from "../data/menu.js";
import logo from "../asset/logo.jpg";
import progression from "./defilementDoux"
const Header = ()=> (
<header>
    <div className="container ">
        <div className="flex space-between">
            <div className="logo">
                <a href="#"><img src={logo} alt="Démo React pour Modis" /></a></div>
            <Menu menuData={menuItem} globalProgression={progression}/>
        </div>
    </div>
</header>);

export default Header;