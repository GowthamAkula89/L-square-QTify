import "./CardComponent.css";
const CardComponent=({item, title})=>{
    
    return(
        <div>
            {title ==="songs" ? (
            <div className="card-container">
                <div className="card-details">
                    <img className="card-img" src={item.image} alt=""/>
                    <div className="follow-container">
                        <div className="follows">
                        {item.likes} Likes
                        </div>
                    </div>
                </div>
                <p className="card-title">
                {item.title}
                </p>
            </div>
            ):(
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
            )}
        </div>
        
        
    )
}
export default CardComponent;