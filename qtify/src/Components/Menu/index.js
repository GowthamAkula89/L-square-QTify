import "./menu.css";
function MenuItem({item}){
    return(
        <div className="menu-item">
            <div className="item-img">
                <img src={item.image} alt="img"/>
            </div>
            <div className="item-description">
                <p1 style={{
                    padding:"12px"
                }}>{item.title}</p1>
            </div>
            <div className="item-followers">
                {item.follows} Follows
            </div>
        </div>
    )
}
const Menu =({data})=>{
    console.log("filterd Data")
    console.log(data)
    return (
        <div className="menu-bar">
            {data.map((item,index)=>
                <div  key={index} style={{
                    padding:"12px"
                }}>
                     <MenuItem item={item}/>
                </div>
               )}
        </div>
    )
}
export default Menu;