import defilementDoux from "./Functions";

const Menu = (props)=>{
    let items = props.menuData;
    return (
        <nav>
            <ul>
                {
                    items.map((item,index)=> {
                    let courrant = index === 0 ? 'current': null;
                    return(<li key={item+index} className={courrant}><a href={item.target} onClick={defilementDoux} >{item.title}</a></li>)
                    })
                }
            </ul>
        </nav>);
} 

export default Menu;