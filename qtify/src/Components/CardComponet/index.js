import "./CardComponent.css";
const CardComponent=({item})=>{
    return(
        <div className="card-container">
            <div className="card-details">
                <img className="card-img" src={item.image} alt=""/>
                <div className="follow-container">
                    <div className="follows">
                    {item.follows} Follows
                    </div>
                </div>
            </div>
            <p className="card-title">
            {item.title}
            </p>
        </div>
    )
}
export default CardComponent;