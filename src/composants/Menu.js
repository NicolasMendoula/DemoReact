import defilementDoux from "./defilementDoux";

const Menu = (props)=>{
    let items = props.menuData;
    return (
        <nav>
            <ul>
                {
                    items.map((item,index)=> {
                    let courrant = index === 0 ? 'current': null;
                    return(<li key={item+index} className={courrant} id={'menu_'+(item.title).toLowerCase()}><a href={item.target} onClick={defilementDoux} >{item.title}</a></li>)
                    })
                }
            </ul>
        </nav>);
} 

export default Menu;